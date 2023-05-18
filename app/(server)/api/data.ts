const BASE_URL = "https://api.themoviedb.org/3";
const options = new URLSearchParams({
  api_key: "13dc2daf8b95b491b59faa4413ffe9ea",
});

export const getMovieGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?${options}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export async function getTrendingMovies() {
  const data = await fetch(`${BASE_URL}/trending/movie/day?${options}`);
  const { genres } = await getMovieGenres();

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = await data.json();

  return results?.results.map((movie: any) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(
      (id: any) =>
        genres.find((genre: { id: number }) => genre.id === Number(id)).name
    ),
  }));
}

export const getMovieById = async (id: string) => {
  const data = await fetch(`${BASE_URL}/movie/${id}?${options}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const movie = await data.json();

  return movie;
};

export const searchMovies = async (query: string) => {
  const data = await fetch(
    `${BASE_URL}/search/movie?${options}&query=${query}&include_adult=false`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = await data.json();

  return results?.results;
};
