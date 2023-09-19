export default function MovieCard(movieObj) {
    return (
        <><div className="h-[40vh] w-[28vh] bg-center bg-cover rounded-md hover:scale-110 hover:cursor-pointer duration-300 flex items-end overflow-hidden"
            style={
                { backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieObj.poster_path})` }}>


            <div className="text-xl text-center font-bold text-white bg-gray-600/30 w-full p-2 ">
                {movieObj.title}
            </div>
        </div>
        </>
    )
}