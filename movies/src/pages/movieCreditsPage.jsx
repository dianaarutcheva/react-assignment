import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const MovieCreditsPage = () => {
  const { id } = useParams();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["credits", { id }],
    queryFn: getMovieCredits,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1 style={{ color: "red", textAlign: "center", marginTop: "2em" }}>{error.message}</h1>;

  const cast = data.cast;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1em",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  return (
    <div style={{ padding: "1.5em", maxWidth: "1200px", margin: "0 auto" }}>
      <Link to={`/movie/${id}`} style={{ display: "inline-block", marginBottom: "1em", textDecoration: "none", color: "#1976d2" }}>
        ← Back to Movie
      </Link>

      <h2 style={{ textAlign: "center", fontSize: "2em", marginBottom: "1em" }}>Cast</h2>

      <ul style={gridStyle}>
        {cast.map((member) => (
          <li key={member.cast_id} style={cardStyle}>
            {member.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${member.profile_path}`}
                alt={member.name}
                style={imgStyle}
              />
            ) : (
              <div style={{ ...imgStyle, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#eee", color: "#555" }}>
                No Image
              </div>
            )}
            <div style={{ padding: "1em" }}>
              <p style={{ fontWeight: "bold", margin: "0.5em 0" }}>{member.name}</p>
              <p style={{ color: "#555", margin: "0.25em 0" }}>{member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCreditsPage;
