import { fetchPopularGames } from "@/lib/rawg";
import GameCard from "@/components/GameCard";
import Pagination from "@/components/Pagination";

export default async function Home({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const { results: games, count } = await fetchPopularGames(currentPage);

  const pageSize = 18;
  const totalPages = Math.ceil(count / pageSize);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
      <h2 className="text-2xl md:text-3xl text-center font-extrabold mb-4">
        These are some top all time games!
      </h2>
      <p className="text-sm md:text-base text-center">
        Based on player counts and popularity
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game: any) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
