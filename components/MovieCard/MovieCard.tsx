'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { completeMoviePoster } from '@/utils/completeMoviePoster';
import { MovieCardProps } from '@/components/MovieCard/MovieCard.types';

export const MovieCard: FC<MovieCardProps> = ({
  movie: { id, title, backdrop_path, genre_ids, vote_average },
}) => {
  const pathname = usePathname();

  return (
    <li className="relative overflow-hidden rounded-md border bg-white shadow-md">
      <span className="absolute right-0 top-0 bg-brand px-2 py-1 text-xs font-medium text-white">
        {vote_average}
      </span>

      <div className="h-80">
        <Image
          src={completeMoviePoster(backdrop_path)}
          width={500}
          height={500}
          alt={title}
          loading={'lazy'}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2.5  p-2">
        <h2 className="text-center text-xl font-bold">{title}</h2>
        <p className="text-xs uppercase text-gray-400">
          {genre_ids.join(' ').split(',')}
        </p>

        <Link className="navLink" href={`${pathname}/${id}`}>
          View Details
        </Link>
      </div>
    </li>
  );
};
