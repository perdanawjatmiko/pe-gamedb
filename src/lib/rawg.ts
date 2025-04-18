const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export async function fetchTrendingGames() {
  const res = await fetch(`${BASE_URL}/games/lists/main?discover=true&ordering=-relevance&page_size=12&page=1&dates=2025-02-18&key=${API_KEY}`, {
    next: { revalidate: 3600 }, // revalidate every 1 hour
  });

  if (!res.ok) throw new Error('Failed to fetch games');
  const data = await res.json();
  return data.results;
}
