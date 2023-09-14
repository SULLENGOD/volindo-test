import React, { useEffect, useState } from "react";
import { searchMovie } from "../../API/fetchMovie";
import { MoviesData } from "../../MoviesApp";
import { ModalMovie } from "../ModalMovie/Index";

interface SearchModalProp {
  searchString: string;
}

export const SearchModal: React.FC<SearchModalProp> = ({
  searchString = "",
}) => {
  const [movies, setMovies] = useState<MoviesData | null>(null);

  const getMovies = async () => {
    try {
      const data = await searchMovie(searchString);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (searchString) {
      getMovies();
    } else {
      setMovies(null);
    }
  }, [searchString]);

  return (
    <>
      <div
        className=" d-flex gap-3 mt-2 mb-3 ms-3"
        style={{ overflowX: "auto" }}
      >
        {movies?.total_results === 0 ? (
          <div className="container text-center">
            <h1 style={textStyle}>Not matches</h1>
          </div>
        ) : (
          movies?.results.map((movie) => (
            <div>
              <ModalMovie key={movie.id} MovieData={movie} Size={200} />
              <h5 style={textStyle} className="mt-3">{movie.original_title}</h5>
            </div>
          ))
        )}
      </div>
    </>
  );
};

const textStyle = {
  color: 'white'
}