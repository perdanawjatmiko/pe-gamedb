'use client';

import { useState } from 'react';

interface GameDescriptionProps {
  description: string;
  limit?: number;
}

export default function GameDescription({ description, limit = 500 }: GameDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > limit;
  const shortDescription = description.slice(0, limit);

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {expanded || !isLong ? description : shortDescription + '...'}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
