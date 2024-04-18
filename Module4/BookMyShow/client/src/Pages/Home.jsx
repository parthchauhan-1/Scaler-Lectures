import { useEffect, useState } from "react";
import { GetAllMovies } from '../apicalls/movies';
import { message, Row, Col } from "antd";
import { setLoading } from "../reduxStore/loaderSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Home() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState();
    const [searchText, setSearchText] = useState('');

    async function getAllMovies() {
        try {
            setLoading(true);
            const res = await GetAllMovies();
            if (res.success) {
                setMovies(res.data);
                message.success(res.message)
            }

        } catch (err) {
            message.error(err.message)
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getAllMovies();
    }, [])


    return (<div>
        <input type='text' placeholder='Search For Currenty Showing Movies'
            className='search-input' onChange={(e) => setSearchText(e.target.value)} />

        <Row gutter={[20]} className="mt-2">
            {movies
                ?.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
                ?.map((movie) => (
                    <Col span={6}>
                        <div
                            className="card flex flex-col gap-1 cursor-pointer"
                            onClick={() =>
                                navigate(
                                    `/movie/${movie._id}/?date=${moment().format('YYYY-MM-DD')}`
                                )
                            }
                        >
                            <img src={movie.poster} alt={movie.title} height={200} />

                            <div className="flex justify-center p-1">
                                <h1 className="text-md uppercase">{movie.title}</h1>
                            </div>
                        </div>
                    </Col>
                ))}
        </Row>
    </div>

    )
}

export default Home
