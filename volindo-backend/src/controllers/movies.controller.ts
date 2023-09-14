import { Request, Response } from "express";

const token = process.env.TMDB_AUTH_TOKEN;

export const getMovies = async (req: Request, res: Response) => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  res.json(data);
};

export const searchMovies = async (req: Request, res: Response) => {
  const query: string = req.body.query;

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  res.json(data);
};

export const getMovie = async (req: Request, res: Response) => {
  const id: number = req.body.id;

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  res.json(data);
};
