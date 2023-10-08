function WatchList(props) {
    let {watchList,handleRemoveFromWatchList}= props;

    const genreIds = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "ScienceFiction",
        10770: "TVMovie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    }
    return (
        <>
            <div className="" class="sorting-button">
                <div className="flex items-center justify-center">
                    <button className="bg-sky-300 
                rounded-md 
                mx-2
                w-[8rem]
                h-[3rem]
                items-center 
                justify-center 
                font-bold 
                text-white">All Genre</button>
                    <button>Action</button>
                    <button>Sci-fi</button>
                </div>
                <div className="flex justify-center my-4">
                    <input className="h-[3rem] w-[18rem]
                        border-none outline-none bg-gray-200 rounded
                    px-4 text-lg " type="text" placeholder="Search for Movies" />
                </div>
            </div>
            <div className="overflow-hidden rounded-lg m-4 p-4 shadow-md">
                <table className="border-2 border-gray-400 w-full text-center">
                    <thead className="bg-gray-300">
                        <th>Name</th>
                        <th className="flex">
                            <i class="fa-solid fa-arrow-up"></i>
                            <div className="mx-4">Rating</div>
                            <i class="fa-solid fa-arrow-down"></i>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </thead>
                    <tbody className="">
                        {watchList.map((movieObj) => {
                            return (<tr className="border-b-2">
                                <td className="flex items-center ml-10">
                                    <img className="h-[6rem] w-[7rem] mr-10" src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt="" />
                                    {movieObj.title}
                                </td>
                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{genreIds[movieObj.genre_ids[0]]}</td>
                                <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-500 font-bold cursor-pointer">Delete</td>
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