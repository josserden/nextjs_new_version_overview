import { NextResponse } from "next/server";
import { getTrendingMovies } from "@/app/(server)/api/data";

export async function GET() {
  const movies = await getTrendingMovies();

  return NextResponse.json(movies);
}
