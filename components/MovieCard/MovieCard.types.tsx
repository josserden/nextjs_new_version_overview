export interface MovieCardProps {
  movie: MovieProps;
}

export interface MovieProps {
  id: number;
  title: string;
  backdrop_path: string;
  genre_ids: string[];
  vote_average: number;
}
