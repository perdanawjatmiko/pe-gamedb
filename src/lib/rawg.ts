const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_RAWG_BASE_URL;

export async function fetchGames(page = 1) {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&page=${page}`, { next: { revalidate: 3600 } });
  return res.json();
}

export async function fetchGameDetail(slug: string) {
  const res = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`, { next: { revalidate: 3600 } });
  return res.json();
}
