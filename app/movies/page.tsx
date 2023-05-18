"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { searchMovies } from "@/app/(server)/api/data";
import { completeMoviePoster } from "@/utils/completeMoviePoster";

import Search from "public/search.svg";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await searchMovies(query);
      setMovies(res);
    } catch (error) {
      console.error(error);
    }

    setQuery("");
  };

  return (
    <>
      <h1 className="pageTitle mb-10">Movies</h1>

      <div className="mx-auto mb-10 max-w-2xl space-x-6 rounded-xl bg-white p-4 shadow-md">
        <form
          className="flex w-full items-center gap-2"
          onSubmit={handleSubmit}
        >
          <div className="relative flex w-full rounded-lg bg-gray-100">
            <Search className="absolute left-4 h-6 w-6 translate-y-1/2" />
            <input
              className="text-md w-full rounded-lg bg-gray-100 p-3 pl-12 font-medium"
              type="text"
              value={query}
              placeholder="Enter name of film..."
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            Search
          </button>
        </form>
      </div>

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
