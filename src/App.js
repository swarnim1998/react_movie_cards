import React from 'react';
import Header from './component/Header';
import MainComponent from './component/MainComponent';
import Input from './component/Input';
import About from './component/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const API_KEY = 'b166498855b6dce6eaf5daea81a83645';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'Spiderman',
      movies: [],
    };
  }

  componentDidMount() {
    this.onChange(this.state.search);
  }

  onChange = (event) => {
    if (typeof event === 'object') {
      this.setState({
        search: event.target.value,
      });
    }
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
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Input onChange={this.onChange} />
              <MainComponent movieList={this.state.movies} />
            </Route>
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
