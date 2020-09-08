import React from 'react';
import Header from './component/Header';
import MainComponent from './component/MainComponent';

const API_KEY = 'b166498855b6dce6eaf5daea81a83645';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      movies: [],
    };
  }

  onChange(event) {
    this.setState({
      search: event.target.value,
    });
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=' +
        API_KEY +
        '&language=en-US&query=' +
        this.state.search +
        '&page=1&include_adult=false'
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <input
          type='text'
          placeholder='Enter Movie Name'
          onChange={(event) => this.onChange(event)}
        />
        <MainComponent movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;
