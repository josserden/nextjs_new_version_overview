import { NextResponse } from "next/server";
import { getMovieById } from "@/app/(server)/api/data";

export async function GET(id: string) {
  const movie = await getMovieById(id);

  return NextResponse.json(movie);
}
