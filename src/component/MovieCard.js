import React from 'react';
import StarRating from './StarRating';

const imgbaseurl = 'https://image.tmdb.org/t/p/w500';
function MovieCard(props) {
  return (
    <div className='card'>
      <div className='cardImage'>
        <img src={imgbaseurl + props.data.poster_path} alt='its not showing' />
      </div>
      <div className='cardBody'>
        <h3> {props.data.title}</h3>
        <p>{props.data.overview}</p>
      </div>
      <StarRating rating={props.data.vote_average / 2} />
    </div>
  );
}

export default MovieCard;
