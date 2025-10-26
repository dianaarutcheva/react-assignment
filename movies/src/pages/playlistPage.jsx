import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";

const PlaylistPage = () => {
  const { playlist: movieIds } = useContext(MoviesContext);

  const playlistQueries = useQueries({
  queries: movieIds.map((id) => ({
    queryKey: ['movie', { id }],
    queryFn: getMovie,
  })),
});

  const isPending = playlistQueries.find((q) => q.isPending === true);
  if (isPending) return <Spinner />;

  const movies = playlistQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="My Playlist"
      movies={movies}
      action={(movie) => <RemoveFromPlaylistIcon movie={movie} />}
    />
  );
};

export default PlaylistPage;
