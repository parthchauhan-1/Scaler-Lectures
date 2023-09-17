import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex p-3 items-center">
            <img className="h-[50px] w-[50px] mx-6" src="https://static.thenounproject.com/png/780122-200.png" alt="app_logo" />
            <Link to={"/"} className="hover:cursor-pointer text-2xl font-bold text-sky-600 mx-6">Movies</Link>
            <Link to={"/watchlist"} className="hover:cursor-pointer text-2xl font-bold text-sky-600 mx-6">WatchList</Link>
        </div>
    )
}
export default Navbar;