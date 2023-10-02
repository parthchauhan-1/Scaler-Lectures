function WatchList() {
    let movies = [{
        "adult": false,
        "backdrop_path": "/nrp2khEM6JWFqqNLeub1J6Qafe0.jpg",
        "id": 866463,
        "title": "Reptile",
        "original_language": "en",
        "original_title": "Reptile",
        "overview": "Following the brutal murder of a young real estate agent, a hardened detective attempts to uncover the tduth in a case where nothing is as it seems, and by doing so dismantles the illusions in his own life.",
        "poster_path": "/soIgqZBoTiTgMqUW0JtxsPWAilQ.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            80,
            18,
            9648
        ],
        "popularity": 106.191,
        "release_date": "2023-09-29",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg",
        "id": 1151534,
        "title": "Nowhere in the wwork is gonna haeck this ",
        "original_language": "es",
        "original_title": "Nowhere",
        "overview": "A young pregnant woman named Mia escapes from a countdy at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.",
        "poster_path": "/rpzFxv78UvYG5yQba2soO5mMl4T.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            18
        ],
        "popularity": 101.763,
        "release_date": "2023-09-29",
        "video": false,
        "vote_average": 7.634,
        "vote_count": 93
    }];
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
                        {movies.map((movieObj) => {
                            return (<tr className="border-b-2">
                                <td className="flex items-center ml-10">
                                    <img className="h-[6rem] w-[7rem] mr-10" src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt="" />
                                    {movieObj.title}
                                </td>
                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>Action</td>
                                <td className="text-red-500 font-bold">Delete</td>
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