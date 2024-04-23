import { message } from "antd";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { setLoading } from "../reduxStore/loaderSlice";
import { GetMovieById } from "../apicalls/movies";
import moment from "moment";
import { GetTheatresByMovie } from "../apicalls/shows";

export default function MovieDescription() {
    const params = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState();
    const [theatres, setTheatres] = useState();
    const [isHovering, setIsHovering] = useState(false);

    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
    async function getMovieById() {
        try {
            setLoading(true);
            const res = await GetMovieById(params.id)
            if (res.success) {
                setMovie(res.data);
                message.success(res.message);
            }
        } catch (err) {
            message.error(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    async function getTheatresByMovie() {
        try {
            setLoading(true);
            const res = await GetTheatresByMovie({ date, movie: params.id });
            console.log(res)
            if (res.success) {
                setTheatres(res.data)
            }

        } catch (error) {
            message.error(error.message);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => { getMovieById() }, []);
    useEffect(() => { getTheatresByMovie() }, [date]);

    const handleMouseEnter = (id) => {
        setIsHovering(true);
    };

    const handleMouseLeave = (id) => {
        setIsHovering(false);
    };


    return (
        movie && (
            <div>
                {/* movie information */}
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h1 className="text-2xl uppercase">
                            {movie.title} ({movie.language})
                        </h1>
                        <h1 className="text-md">Duration : {movie.duration} mins</h1>
                        <h1 className="text-md">
                            Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
                        </h1>
                        <h1 className="text-md">Genre : {movie.genre}</h1>
                    </div>

                    <div className="mr-3">
                        <h1 className="text-md ">Select Date</h1>
                        <input
                            type="date"
                            min={moment().format("YYYY-MM-DD")}
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                navigate(`/movie/${params.id}?date=${e.target.value}`);
                            }}

                        />
                    </div>
                </div>
                <hr />
                {/* movie theatres */}
                <div className="mt-1">
                    <h1 className="text-xl uppercase">Theatres</h1>
                </div>
                <div className="mt-1 flex flex-col gap-1">
                    {theatres?.map((theatre) => (
                        <div className="card p-2">
                            <h1 className="text-md uppercase">{theatre.name}</h1>
                            <h1 className="text-sm">Address : {theatre.address}</h1>
                            <div className="divider"></div>
                            <div className="flex gap-2">
                                {theatre.shows
                                    .sort(
                                        (a, b) => moment(a.time, "HH:mm") - moment(b.time, "HH:mm")
                                    )
                                    .map((show) => (
                                        <div key={show._id} style={{
                                            backgroundColor: isHovering ? '#DF1827' : 'white',
                                            color: isHovering ? 'white' : '#DF1827',
                                        }}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className="card p-1 cursor-pointer border-primary"
                                            onClick={() => {
                                                navigate(`/book-show/${show._id}`);
                                            }}
                                        >
                                            <h1 className="text-sm">
                                                {moment(show.time, "HH:mm").format("hh:mm A")}
                                            </h1>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}
