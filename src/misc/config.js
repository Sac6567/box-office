const API_BASE_URL = 'https://api.tvmaze.com';

// fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
//       .then(r => r.json())
//       .then(result => {
//         setResults(result);
//         console.log(result);
//       });

export async function apiGet(quarryString) {
  const response = await fetch(`${API_BASE_URL}${quarryString}`).then(r =>
    r.json()
  );
  return response;
}
