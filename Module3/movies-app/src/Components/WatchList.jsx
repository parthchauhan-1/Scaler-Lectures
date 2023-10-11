import { useEffect, useState } from "react";
import genreIds from "../Utilities/genre";
function WatchList(props) {
    let { watchList, handleRemoveFromWatchList,setWatchList } = props;
    let [genreList, setGenreList] = useState(["All Genres"]);
    let [currGenre, setCurrGenre] = useState("All Genres")
    let [search, setSearch] = useState("");
    useEffect(() => {
        let temp = watchList.map((movieObj) => {
            return genreIds[movieObj.genre_ids[0]];
        })
        temp = new Set(temp);
        setGenreList(["All Genres", ...temp]);
        console.log(genreList);
    }, [watchList])

    let handleFilter = (genre) => {
        setCurrGenre(genre);
    }
    let handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    let handleAscSort=()=>{
        let sortedList=watchList.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average;
        })
        setWatchList([...sortedList]);
    }
    let handleDescSort=()=>{
        let sortedList=watchList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average;
        })
        setWatchList([...sortedList]);
    }

    return (
        <>
            <div className="flex justify-center">
                {genreList.map((genre) => {
                    return <div key={genre} onClick={() => handleFilter(genre)} className={
                        currGenre == genre ? "hover:cursor-pointer flex justify-center items-center w-[9rem] h-[3rem] rounded-xl bg-blue-400 m-4 text-white font-bold "
                            : "hover:cursor-pointer flex justify-center items-center w-[9rem] h-[3rem] rounded-xl bg-gray-400/50 m-4 text-white font-bold "}>{genre}</div>
                })}
            </div>
            <div className="" class="sorting-button">

                <div className="flex justify-center my-4">
                    <input className="h-[3rem] w-[18rem]
                        border-none outline-none bg-gray-200 rounded
                    px-4 text-lg " onChange={handleSearch} type="text" placeholder="Search for Movies" />
                </div>
            </div>
            <div className="overflow-hidden rounded-lg m-4 p-4 shadow-md">
                <table className="border-2 border-gray-400 w-full text-center">
                    <thead className="bg-gray-300">
                        <th>Name</th>
                        <th className="flex">
                            <i onClick={handleAscSort} class="fa-solid fa-arrow-up"></i>
                            <div className="mx-4">Rating</div>
                            <i onClick={handleDescSort} class="fa-solid fa-arrow-down"></i>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </thead>
                    <tbody className="">
                        {watchList
                            .filter((movieObj) => {
                                if (currGenre == "All Genres") {
                                    return true;
                                }
                                else {
                                    return genreIds[movieObj.genre_ids[0]] == currGenre;
                                }

                            })
                            .filter((movieObj) => {
                                return movieObj.title.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((movieObj) => {
                                return (<tr className="border-b-2">
                                    <td className="flex items-center ml-10">
                                        <img className="h-[6rem] w-[7rem] mr-10" src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt="" />
                                        {movieObj.title}
                                    </td>
                                    <td>{movieObj.vote_average}</td>
                                    <td>{movieObj.popularity}</td>
                                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                                    <td onClick={() => handleRemoveFromWatchList(movieObj)} className="text-red-500 font-bold cursor-pointer">Delete</td>
                                </tr>
                                )
                            })}


                    </tbody>
                </table>
            </div>
        </>
    )
}
export default WatchList;