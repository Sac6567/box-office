const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(quarryString) {
  const response = await fetch(`${API_BASE_URL}${quarryString}`).then(r =>
    r.json()
  );
  return response;
}
