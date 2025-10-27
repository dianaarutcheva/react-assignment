import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'; 
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
//for assignment 
import PopularMoviesPage from './pages/popularMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import MovieCreditsPage from "./pages/movieCreditsPage";
import MovieRecommendationsPage from "./pages/movieRecommendationsPage";
import PlaylistPage from "./pages/playlistPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // import custom theme



// Create a query client to manage the cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,         // Cache data for 1 hour
      refetchInterval: 360000,   // Refetch every hour
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return ( 
// import custom theme
    <ThemeProvider theme={theme}>  

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} /> 
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending/today" element={<TrendingMoviesPage />} />
            <Route path="/popular" element={<PopularMoviesPage />} />
            <Route path="/top-rated" element={<TopRatedMoviesPage />} />
            <Route path="/now-playing" element={<NowPlayingMoviesPage />} />
            <Route path="/movie/:id/credits" element={<MovieCreditsPage />} />
            <Route path="/movie/:id/recommendations" element={<MovieRecommendationsPage />} />
            <Route path="/movies/playlist" element={<PlaylistPage />} />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);





