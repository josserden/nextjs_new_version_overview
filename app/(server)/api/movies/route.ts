import { NextResponse } from "next/server";
import { getTrendingMovies } from "@/utils/movies-api";

export async function GET() {
  const movies = await getTrendingMovies();

  return NextResponse.json(movies);
}
