const auth_token = import.meta.env.VITE_TMDB_AUTH_TOKEN

export const fetchMovie = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${auth_token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const searchMovie = async (string: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${string}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${auth_token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const getMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${auth_token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
