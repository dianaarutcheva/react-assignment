import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
  // For now, clicking does nothing
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleClick}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;
