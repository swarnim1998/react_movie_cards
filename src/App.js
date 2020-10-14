import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import MainComponent from "./component/MainComponent";
import Input from "./component/Input";
import NotFound from "./component/NotFound";
import Pagination from "./component/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, getMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [error, setError] = useState(false);

  useEffect(() => {
    onChange("hello");
  }, []);

  const paginate = (Pagenumber) => {
    setCurrentPage(Pagenumber);
  };

  const onChange = (event) => {
    let qry;
    if (typeof event === "object") {
      qry = event.target.value;
    } else {
      qry = event;
    }
    console.log(qry);
    fetch(`http://localhost:5000/${qry}`)
      .then((data) => data.json())
      .then((res) => {
        setError(false);
        getMovies(res.Search);
      })
      .catch((err) => setError(true));
  };

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  if (movies) {
    var currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  }

  return (
    <div>
      <Header />
      <Input onChange={onChange} />

      {error ? (
        <NotFound />
      ) : (
        <div>
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
          />
          <MainComponent movieList={currentMovies} />
        </div>
      )}
    </div>
  );
}

export default App;
