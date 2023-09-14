import { useEffect, useState } from "react";
import { getMovie } from "../../API/fetchMovie";
import { CardMovieProps } from "../CardMovie/Index";

interface Genere {
  id: number;
  name: string;
}

interface AllInfo {
  poster_path: string;
  original_title: string;
  overview: string;
  runtime: number;
  genres: Genere[];
  vote_average: number;
  release_date: string;
}

export const ModalCard: React.FC<CardMovieProps> = ({ MovieData }) => {
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState<AllInfo | undefined>(undefined);

  const fetchMovie = async () => {
    try {
      const data = await getMovie(MovieData.id);
      if (data === undefined) {
        setError(true);
      } else {
        setMovie(data);
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const cardStyle = {
    width: "500px",
  };

  return (
    <>
      {error ? (
        <h1>Not found instanceof.</h1>
      ) : (
        <div className="card text-bg-dark" style={cardStyle}>
          {movie && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h3 className="card-title mt-3">{movie.original_title}</h3>
                <p className="card-text">{movie.overview}</p>
                <p> Release date: {movie.release_date}</p>
                <div className="text-start mt-5 mb-4">
                  <p>Vote average: {movie.vote_average}</p>
                  <p>Duration: {movie.runtime} min.</p>
                  <p>
                    Genres: {movie.genres.map((item) => item.name).join(", ")}.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
