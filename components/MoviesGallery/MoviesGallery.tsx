import React, { FC } from 'react';
import { MovieCard } from '@/components/MovieCard';

import { MoviesGalleryProps } from '@/components/MoviesGallery/MoviesGallery.types';
import { MovieProps } from '@/components/MovieCard/MovieCard.types';

export const MoviesGallery: FC<MoviesGalleryProps> = ({ movies = [] }) => {
  return (
    <ul className="grid gap-8 xl:grid-cols-3 md:grid-cols-2">
      {movies.map((movie: MovieProps) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
