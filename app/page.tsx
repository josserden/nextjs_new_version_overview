import Image from "next/image";
import Link from "next/link";

import { getTrendingMovies } from "@/utils/movies-api";
import { completeMoviePoster } from "@/utils/completeMoviePoster";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <>
      <h1 className="pageTitle mb-10">Trending Movies</h1>

      <ul className="md:grid-col-2 grid gap-8 xl:grid-cols-3">
        {movies.map((movie: any) => (
          <li
            className="relative overflow-hidden rounded-md border bg-white shadow-md"
            key={movie.id}
          >
            <span className="absolute right-0 top-0 bg-brand px-2 py-1 text-xs font-medium text-white">
              {movie.vote_average}
            </span>

            <div className="h-80">
              <Image
                src={completeMoviePoster(movie.backdrop_path)}
                width={500}
                height={500}
                alt={movie.title}
                loading={"lazy"}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <div className="flex flex-col items-center gap-2.5  p-2">
              <h2 className="text-center text-xl font-bold">{movie.title}</h2>
              <p className="text-xs uppercase text-gray-400">
                {movie.genre_ids.join(" ").split(",")}
              </p>

              <Link className="navLink" href={`/movies/${movie.id}`}>
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
