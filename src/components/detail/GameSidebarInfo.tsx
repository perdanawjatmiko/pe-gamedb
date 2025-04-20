import Link from "next/link";

interface Game {
  rating: number;
  ratings_count: number;
  released: string;
  website?: string;
}

interface Props {
  game: Game;
}

export default function GameSidebarInfo({ game }: Props) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(game.released));

  return (
    <div className="bg-gray-900 dark:bg-slate-800 text-white p-6 rounded-lg shadow-lg space-y-4">
      <div>
        <h4 className="font-semibold">Rating</h4>
        <p>{game.rating} / 5 ({game.ratings_count} votes)</p>
      </div>

      <div>
        <h4 className="font-semibold">Release Date</h4>
        <p>{formattedDate}</p>
      </div>

      {game.website && (
        <div>
          <h4 className="font-semibold">Official Website</h4>
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
  );
}
