import React from "react";
import MovieCard from "./MovieCard";

function MainComponent(props) {
  const movieComponent = props.movieList
    ? props.movieList.map((item) => {
        return <MovieCard key={item.imdbID} data={item} />;
      })
    : null;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        top: "150px",
      }}
    >
      <div className="container">{movieComponent}</div>;
    </div>
  );
}

export default MainComponent;
