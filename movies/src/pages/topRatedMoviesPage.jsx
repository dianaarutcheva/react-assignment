import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const TopRatedMoviesPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: getTopRatedMovies,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;
