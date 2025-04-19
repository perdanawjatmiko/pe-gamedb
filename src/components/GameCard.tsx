'use client';

import Image from 'next/image';
import Link from 'next/link';

type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  genres: { id: number; name: string; slug: string }[];
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="card bg-white dark:bg-slate-800 w-90 shadow-sm">
      <figure>
        <Image
          src={game.background_image || '/fallback.jpg'}
          alt={game.name}
          width={300}
          height={170}
          className="rounded-t-lg object-cover w-full h-[200px]"
        />
      </figure>
      <div className="card-body">
        <Link href={`/games/${game.slug}`} className='hover:text-yellow-500'>
            <h2 className="card-title">
                    {game.name}
            </h2>
        </Link>
        <div className="grid grid-cols-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Released :</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{game.released}</p>

          <p className="text-xs text-gray-500 dark:text-gray-400">Genres :</p>
          <div className="flex flex-wrap gap-1">
            {game.genres.map(({ id, name }) => (
              <span
                key={id}
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                {name}
                ,
              </span>
            ))}
          </div>
        </div>
        <div className="card-actions mt-4">
          <Link href={`/games/${game.slug}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
