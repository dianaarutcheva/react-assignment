import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getGenres } from "../../api/tmdb-api";
import Spinner from '../spinner';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//new image for filter background
import img from '../../images/filter-movies.jpeg'; 

const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterMoviesCard(props) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "Select Genre") {
    genres.unshift({ id: "0", name: "Select Genre" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
  <Card sx={{ backgroundColor: "#000", boxShadow: "0 0 10px #ff69b4" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" /> Filter the movies.
        </Typography>



        <TextField
           sx={{
        marginBottom: 2,
        minWidth: "90%",
        input: { color: "#fff" },            // White text inside
        label: { color: "#ff69b4" },         // Pink label
        '.MuiFilledInput-root': { backgroundColor: "#1a1a1a" }, // Dark background
      }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />


        <FormControl sx={{ 
  ...formControl, 
  backgroundColor: "#1a1a1a" // dim background 
}}>
         
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
             sx={{
      color: "#ff69b4", // Pink text 
    }}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>




      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" /> Filter the movies.
        </Typography>
      </CardContent>
    </Card>
  );
}
