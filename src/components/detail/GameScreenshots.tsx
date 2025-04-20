import Image from "next/image";

interface GameScreenshotsProps {
  screenshots: {
    id: number;
    image: string;
  }[];
}

export default function GameScreenshots({ screenshots }: GameScreenshotsProps) {
  if (!screenshots.length) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
      <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {screenshots.map((shot) => (
          <div
            key={shot.id}
            className="relative w-full h-48 md:h-56 lg:h-64 rounded overflow-hidden"
          >
            <Image
              src={shot.image}
              alt={`Screenshot ${shot.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
