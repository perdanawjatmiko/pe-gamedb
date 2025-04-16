import Image from "next/image";
import { fetchGames } from '@/lib/rawg';
import DarkModeToggle from "@/components/DarkModeToggle";

export default async function Home() {
  const data = await fetchGames();
  return (
    <div className="">
      <DarkModeToggle/>
      <ul>

      {data.results.map((game: any) => (
        <li key={game.id} className="text-gray-900 dark:text-white">
          {game.name}
        </li>
      ))}
      </ul>
    </div>
  );
}
