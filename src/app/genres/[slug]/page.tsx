// app/genres/[slug]/page.tsx
import { fetchGamesByGenre } from '@/lib/rawg';
import GameCard from '@/components/GameCard';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ page:string }>



export default async function GenrePage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const currentPage = parseInt(searchParams?.page || '1', 10);
  const pageSize = 18;

  const { results: games, count } = await fetchGamesByGenre(params.slug, currentPage);
  const totalPages = Math.ceil(count / pageSize);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
      <h2 className="text-2xl md:text-3xl text-center font-extrabold mb-4 capitalize">
        Games in {params.slug.replaceAll('-', ' ')}
        {currentPage > 1 && ` - Page ${currentPage}`}
        </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game: any) => (
          <Link key={game.id} href={`/games/${game.slug}`} className="cursor-pointer hover:scale-105 duration-150">
            <GameCard game={game} />
          </Link>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} additionalUrl={`genres/${params.slug}`} />
    </div>
  );
}
