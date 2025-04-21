// app/loading.tsx
import GameCardSkeleton from '@/components/GameCardSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
      <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-10 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {[...Array(9)].map((_, i) => (
          <GameCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
