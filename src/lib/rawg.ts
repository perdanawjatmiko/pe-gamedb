const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';
const today = new Date().toISOString().split('T')[0];

export async function fetchTrendingGames() {
  const res = await fetch(`${BASE_URL}/games?dates=2025-01-01,${today}&ordering=-rating&page_size=12&key=${API_KEY}`, {
    next: { revalidate: 3600 }, // revalidate every 1 hour
  });

  if (!res.ok) throw new Error('Failed to fetch games');
  const data = await res.json();
  return data.results;
}

export async function fetchPopularGames(page = 1, pageSize = 18) {
  const res = await fetch(`${BASE_URL}/games/lists/popular?key=${API_KEY}&page=${page}&page_size=${pageSize}`, {
    next: { revalidate: 3600 }, // revalidate every 1 hour
  });

  if (!res.ok) throw new Error('Failed to fetch games');
  const data = await res.json();
  return {
    results: data.results,
    next: data.next,
    previous: data.previous,
    count: data.count,
  };
}

export async function fetchGameDetail(slug: string) {
    const res = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch game detail");
    return res.json();
  }
