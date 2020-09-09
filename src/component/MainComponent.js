import React from 'react';
import MovieCard from './MovieCard';

function MainComponent(props) {
  const movieComponent = props.movieList
    ? props.movieList.map((item) => <MovieCard key={item.id} data={item} />)
    : null;
  return (
    <div>
      <div className='container'>{movieComponent}</div>;
    </div>
  );
}

export default MainComponent;
