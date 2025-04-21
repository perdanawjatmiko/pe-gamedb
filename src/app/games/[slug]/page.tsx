// app/games/[slug]/page.tsx
import GameDescription from "@/components/detail/GameDescription";
import GameHeader from "@/components/detail/GameHeader";
import GameScreenshots from "@/components/detail/GameScreenshots";
import GameSidebarInfo from "@/components/detail/GameSidebarInfo";
import GameSystemRequirements from "@/components/detail/GameSystemRequirements";
import { fetchGameDetail, fetchGameScreenshots, fetchGameTrailers } from "@/lib/rawg";

interface PageProps {
    params: {
      slug: string;
    };
    searchParams?: Record<string, string | string[] | undefined>;
  }

  export default async function GameDetail({ params }: PageProps) {
    const game = await fetchGameDetail(params.slug);
    const screenshots = await fetchGameScreenshots(game.id);
    const trailers = await fetchGameTrailers(game.id);

    return (
        <div className="min-h-screen">
            {/* Header Banner */}
            <GameHeader game={game} />

            {/* Trailer Section */}
            {trailers.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12">
                    <h2 className="text-xl font-semibold mb-4">Game Trailer</h2>
                    <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src={`https://www.youtube.com/embed/${trailers[0].data.max?.split("embed/")[1] || trailers[0].data.youtube_id}`}
                            title={trailers[0].name}
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}


            {/* Screenshots Section */}
            <GameScreenshots screenshots={screenshots} />


            {/* Game Detail Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-5 gap-12">
                {/* Main Info */}
                <div className="md:col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">About</h2>

                    <GameDescription description={game.description_raw} />

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm ">
                        <div>
                            <h4 className="font-semibold ">Platforms</h4>
                            <p>{game.platforms.map((p: any) => p.platform.name).join(", ")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold ">Developers</h4>
                            <p>{game.developers.map((d: any) => d.name).join(", ")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold ">Publishers</h4>
                            <p>{game.publishers.map((p: any) => p.name).join(", ")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold ">Genres</h4>
                            <p>{game.genres.map((g: any) => g.name).join(", ")}</p>
                        </div>
                    </div>

                    <GameSystemRequirements platforms={game.platforms} />


                </div>

                {/* Sidebar Info */}
                <div className="md:col-span-2 h-full">
                    <GameSidebarInfo game={game} />
                </div>
            </div>
        </div>
    );
}
