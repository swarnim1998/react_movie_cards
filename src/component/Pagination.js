import React from "react";

export default function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", position: "fixed", top: "125px", zIndex: "1" }}
    >
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
