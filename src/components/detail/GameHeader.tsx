"use client";

import Image from "next/image";

interface GameHeaderProps {
  game: {
    name: string;
    released: string;
    background_image: string;
    genres: { name: string }[];
  };
}

export default function GameHeader({ game }: GameHeaderProps) {
  const releaseDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(game.released));

  return (
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
        <p className="text-sm md:text-lg drop-shadow">
          {releaseDate} • {game.genres.map((g) => g.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
