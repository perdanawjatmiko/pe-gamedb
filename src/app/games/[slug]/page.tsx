// app/games/[slug]/page.tsx
import GameDescription from "@/components/GameDescription";
import { fetchGameDetail } from "@/lib/rawg";
import Image from "next/image";
import Link from "next/link";

export default async function GameDetail({ params }: { params: { slug: string } }) {
    const game = await fetchGameDetail(params.slug);
    // console.log(game)

    return (
        <div className="min-h-screen">
            {/* Header Banner */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={game.background_image || "/fallback.jpg"}
                    alt={game.name}
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        {game.name}
                    </h1>
                    <p className="text-sm md:text-lg  drop-shadow">
                        {game.released} • {game.genres.map((g: any) => g.name).join(", ")}
                    </p>
                </div>
            </div>

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

                    {game.platforms.some(
                        (p: any) =>
                            p.platform.slug === "pc" &&
                            (p.requirements?.minimum || p.requirements?.recommended)
                    ) && (
                            <div className="mt-8">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">
                                    System Requirements for PC
                                </h3>

                                {game.platforms
                                    .filter(
                                        (p: any) =>
                                            p.platform.slug === "pc" &&
                                            (p.requirements?.minimum || p.requirements?.recommended)
                                    )
                                    .map((p: any) => (
                                        <div key={p.platform.id} className="bg-transparent">
                                            {p.requirements.minimum && (
                                                <div className="mb-2">
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                                        {p.requirements.minimum}
                                                    </p>
                                                </div>
                                            )}
                                            {p.requirements.recommended && (
                                                <div>
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                                        {p.requirements.recommended}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        )}


                </div>

                {/* Sidebar Info */}
                <div className="bg-gray-900 dark:bg-slate-800 text-white p-6 rounded-lg shadow-lg md:col-span-2 space-y-4">
                    <div>
                        <h4 className="font-semibold ">Rating</h4>
                        <p className="">{game.rating} / 5 ({game.ratings_count} votes)</p>
                    </div>
                    <div className="">
                        <h4 className="font-semibold ">Release Date</h4>
                        <p>{new Intl.DateTimeFormat("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        }).format(new Date(game.released))}</p>
                    </div>
                    {game.website && (
                        <div>
                            <h4 className="font-semibold ">Official Website</h4>
                            <Link
                                href={game.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline break-all"
                            >
                                {game.website}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
