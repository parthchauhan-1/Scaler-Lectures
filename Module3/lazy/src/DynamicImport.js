import "./App.css";
import { useState } from "react";
// import { moviesData } from "./data";

function DynamicImport() {
  const [movies, setMovies] = useState([]);
  function handleShowMovies() {
    import("./data").then((module) => setMovies(module.moviesData));
    // setMovies(moviesData);
    // console.log(moviesData);
  }

  return (
    <div className="App">
      <button onClick={handleShowMovies}>Show Movies</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicImport;
