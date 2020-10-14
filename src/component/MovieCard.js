import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <div className="cardImage">
        <img
          src={props.data.Poster}
          alt="poster not found"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "../images/pngtree2.jpg";
          }}
        />
      </div>
      <div className="cardBody">
        <h3> {props.data.Title}</h3>
        <h3>Type: {props.data.Type} </h3>
        <h3>Year: {props.data.Year} </h3>
      </div>
    </div>
  );
}

export default MovieCard;
