import React from 'react';

import { getTrendingMovies } from '@/utils/movies-api';
import { MoviesGallery } from '@/components/MoviesGallery';

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <>
      <h1 className="pageTitle mb-10">Trending Movies</h1>

      <MoviesGallery movies={movies} />
    </>
  );
}
