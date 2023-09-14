import { useEffect, useState } from "react";
import { fetchMovie } from "./API/fetchMovie";
import { Search } from "./Layout/Search/Index";
import { GridMovies } from "./Components/GridMovies/Index";
import { Navbar } from "./Layout/Navbar/Index";

export interface MoviesData {
  results: {
    id: number;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: string;
  }[];
  total_results: number;
}

export const MoviesApp = () => {
  const [movies, setMovies] = useState<MoviesData>();

  const getMovies = async () => {
    const data = await fetchMovie();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <>
    <Navbar />
      <Search />
      <div className="mt-3">
          <GridMovies Movies={movies} />
      </div>
      
    </>
  );
};
