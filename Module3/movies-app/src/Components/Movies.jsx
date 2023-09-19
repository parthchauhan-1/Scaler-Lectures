import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";


function Movies() {
    let [movieList, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=24599a0ad433f254043a04781f736a75`)
            .then(
                function (res) {
                    setMovie(res.data.results);
                }, []
            );
    })


    return (
        <>
            <div className="text-2xl m-3 text-center font-bold">Trending Movies</div>

            <div className="flex flex-wrap justify-around gap-8">
                {movieList.map((movieObj) => {
                  return  <MovieCard key={movieObj.id} title={movieObj.title} poster_path={movieObj.poster_path} />
                })}
            </div>
        </>
    )
}
export default Movies;