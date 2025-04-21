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
    <div className="card bg-white dark:bg-slate-800 w-full md:w-90 shadow-sm">
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
        <div className='hover:text-yellow-500'>
            <h2 className="card-title">
                    {game.name}
            </h2>
        </div>
        
      </div>
    </div>
  );
}
