import { message } from "antd";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { setLoading } from "../reduxStore/loaderSlice";
import { GetMovieById } from "../apicalls/movies";
import moment from "moment";
import { GetTheatresByMovie } from "../apicalls/shows";

function MovieDescription() {
    const params = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState();
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
            const res = GetTheatresByMovie({ date, movie: params.id });
            if (res.success) {
                console.log(res.data)
            }

        } catch (error) {
            message.error(error.message);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => { getMovieById() }, []);
    useEffect(() => getTheatresByMovie, [date]);


    return (
        <div>
            {movie && (
                <div>
                    {/* movie information */}
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h1 className="text-2xl uppercase">
                                {movie.title} ({movie.language})
                            </h1>
                            <p>{movie.description}</p>
                            <h1 className="text-md">Duration : {movie.duration} mins</h1>
                            <h1 className="text-md">
                                Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
                            </h1>
                            <h1 className="text-md">Genre : {movie.genre}</h1>
                        </div>
                        <div>
                            <h1 className="text-md">Select Date</h1>
                            <input
                                type="date"
                                min={moment().format("YYYY-MM-DD")}
                                // max={moment().add(10, 'days').format('YYYY-MM-DD')}
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    navigate(`/movie/${params.id}?date=${e.target.value}`);
                                }}
                            />
                        </div>
                    </div>

                </div>
            )
            }
        </div>
    )
}

export default MovieDescription
