import React from "react";
import Image from "next/image";

import { getMovieById } from "@/app/(server)/api/data";
import { completeMoviePoster } from "@/utils/completeMoviePoster";

export default async function Movie({ params }: any) {
  const movie = await getMovieById(params.movie);

  return (
    <div className="flex flex-col gap-10 rounded-lg bg-white px-10 py-12 shadow-md">
      <h1 className="pageTitle">{movie.original_title}</h1>
      <div className="mx-auto w-full overflow-hidden rounded-lg border border-gray-400 shadow-lg">
        <Image
          src={completeMoviePoster(movie.backdrop_path)}
          alt={movie.original_title}
          width={1000}
          height={500}
          loading="lazy"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
