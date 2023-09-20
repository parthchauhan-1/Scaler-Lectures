import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
    let [details,setDetails]=useState({});
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=24599a0ad433f254043a04781f736a75`)
        .then(function(res){
            setDetails(res.data.results[0])
            // console.log(res.data.results)
        },[])
    })
    return (
        <div className="h-[30vh] flex items-end md:h-[60vh] bg-cover bg-top"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})` }} >
            <div className="text-2xl text-center font-bold text-white bg-gray-800/70 w-full p-4">
                {details.title}
            </div>
        </div>
    )
}
export default Banner;