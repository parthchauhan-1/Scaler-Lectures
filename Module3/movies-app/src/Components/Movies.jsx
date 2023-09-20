import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";


function Movies() {
    let [movieList, setMovie] = useState([]);
    let [pageNo,setPageNo]=useState(1);
    let handlenext=()=>{
        setPageNo(pageNo+1);
    }

    let handlePrev=()=>{
        if(pageNo>1)
            setPageNo(pageNo-1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=24599a0ad433f254043a04781f736a75&page=${pageNo}`)
            .then(
                function (res) {
                    setMovie(res.data.results);
                }, [pageNo]
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
            <Pagination pageNo={pageNo} handlePrev={handlePrev} handlenext={handlenext}/>
        </>
    )
}
export default Movies;