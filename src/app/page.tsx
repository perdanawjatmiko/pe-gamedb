import { fetchTrendingGames } from "@/lib/rawg";
import Image from "next/image";

export default async function Home() {
  const games = await fetchTrendingGames();

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <h2 className="text-2xl md:text-3xl text-center font-extrabold mb-4">
        These are some new and trending games!
      </h2>
      <p className="text-sm md:text-base text-center">
        Based on player counts and release date
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game: any) => (
          <div key={game.id} className="card dark:bg-slate-800 w-80 shadow-sm">
            <figure className="px-6 pt-6">
              <Image
                src={game.background_image || '/fallback.jpg'}
                alt={game.name}
                width={300}
                height={170}
                className="rounded-xl object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{game.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Released: {game.released}
              </p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
