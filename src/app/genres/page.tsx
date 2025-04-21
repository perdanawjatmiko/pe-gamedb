// app/genres/page.tsx
import { fetchGenres } from '@/lib/rawg';
import Link from 'next/link';

export default async function GenresPage() {
  const genres = await fetchGenres();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">🎮 All Genres</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {genres.map((genre: any) => (
          <Link key={genre.id} href={`/genres/${genre.slug}`} className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:bg-yellow-500 hover:text-black transition">
            <h2 className="text-lg font-semibold">{genre.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
