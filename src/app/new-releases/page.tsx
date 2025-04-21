import GameCard from "@/components/GameCard";
import Pagination from "@/components/Pagination";
import { fetchNewReleases } from "@/lib/rawg";
import Link from "next/link";

type SearchParams = Promise<{ page:string }>

export default async function NewReleasesPage(props : {searchParams : SearchParams}) {
  const searchParams = await props.searchParams
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const today = new Date();
  const past30Days = new Date();
  past30Days.setDate(today.getDate() - 30);

  const startDate = past30Days.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];

  const { results: games, count } = await fetchNewReleases(startDate, endDate, currentPage);
  const pageSize = 18;
  const totalPages = Math.ceil(count / pageSize);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">🆕 New Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game : any) => (
            <Link key={game.id} href={`/games/${game.slug}`} className="cursor-pointer hover:scale-105 duration-150">
                <GameCard game={game} />
            </Link>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} additionalUrl="new-releases" />
    </div>
  );
}
