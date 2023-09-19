import { ModalMovie } from "../ModalMovie/Index";

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface CardMovieProps {
  MovieData: Movie;
  Size: number;
}

export const CardMovie: React.FC<CardMovieProps> = ({ MovieData }) => {
  const { original_title, overview, release_date } = MovieData;
  return (
    <div className="card border-0 justify-content-center mb-5 text-bg-dark shadow mb-5 rounded" style={{ width: "300px" }}>
      <ModalMovie MovieData={MovieData} Size={300} />
      <div className="card-body text-center">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text text-truncate ">{overview}</p>
        <p>Release Date: {release_date}</p>
      </div>
    </div>
  );
};
