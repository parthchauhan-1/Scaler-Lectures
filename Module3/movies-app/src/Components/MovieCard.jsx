export default function MovieCard(props) {
    let { title, poster_path, handleAddToWatchList, watchList, id,handleRemoveFromWatchList} = props;
    return (
        <><div className="h-[40vh] w-[28vh] bg-center bg-cover rounded-md hover:scale-110 hover:cursor-pointer duration-300 flex flex-col justify-between items-end overflow-hidden"
            style={
                { backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>

            {watchList.includes(id)?
            <p onClick={()=>handleRemoveFromWatchList(id) } 
                className="m-4 
                            h-8 
                            w-8 
                            hover:scale-110
                            duration-300
                            bg-gray-600/60 
                            flex 
                            items-center 
                            justify-center rounded-lg">&#10060;</p>:
            <p onClick={()=>{ handleAddToWatchList(id)} } 
                            className="m-4 
                                        h-8 
                                        w-8 
                                        hover:scale-110
                                        duration-300
                                        bg-gray-600/60 
                                        flex 
                                        items-center 
                                        justify-center rounded-lg">&#128525;</p>}
            
           
            

            <div className="text-xl text-center font-bold text-white bg-gray-900/30 w-full p-2 ">
                {title}
            </div>
        </div>
        </>
    )
}