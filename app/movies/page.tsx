'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { Form } from '@/components/Form';
import { MoviesGallery } from '@/components/MoviesGallery';
import { searchMovies } from '@/utils/movies-api';

import { MovieProps } from '@/components/MovieCard/MovieCard.types';

export default function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getMovies = async (searchQuery: string) => {
    try {
      const res = await searchMovies(searchQuery);
      setMovies(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      getMovies(query).then(response => response);
    }
  }, [searchParams]);

  const handleSubmit = async (query: string) => {
    await getMovies(query);
    router.push(`${pathname}?query=${query}`);
  };

  return (
    <>
      <h1 className="pageTitle mb-10">Movies</h1>

      <Form onSubmit={handleSubmit} />

      <MoviesGallery movies={movies} />
    </>
  );
}
