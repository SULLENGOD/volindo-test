import React from "react";
import { CardMovie, Movie } from "../CardMovie/Index";
import { MoviesData } from "../../MoviesApp";

interface GridMoviesProps {
  Movies: MoviesData | undefined;
}

export const GridMovies: React.FC<GridMoviesProps> = ({Movies}) => {
  
  return (
    <>
    <h1 className="p-5 pt-0" style={textStyle}>Popular Now:</h1>
    <div className="d-flex flex-wrap justify-content-center gap-4">
        {Movies &&
            Movies.results.map((movie: Movie) => {
              return <CardMovie MovieData={movie} Size={300} />;
            })}
    </div>
    </>
  )
};

const textStyle = {
  color: 'white'
}
