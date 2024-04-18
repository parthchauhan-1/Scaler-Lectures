import { Col, Form, Modal, Row, Table, message } from "antd"
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Button from '../../Components/Button'
import { GetAllMovies } from "../../apicalls/movies"
import { GetAllShowsByTheatre, DeleteShow } from '../../apicalls/shows'
import { AddShow } from '../../apicalls/shows'
import { setLoading } from "../../reduxStore/loaderSlice"

function Shows({ openShowsModal, setOpenShowsModal, theatre }) {

    let [view, setView] = useState("table");
    let [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => { getShows() }, [])

    const getData = async () => {
        try {
            setLoading(true);
            const moviesResponse = await GetAllMovies();
            if (moviesResponse.success) {
                setMovies(moviesResponse.data);
            } else {
                message.error(moviesResponse.message)
            }
        } catch (error) {
            message.error(error.message)

        }
        finally {
            setLoading(false);
        }
    }

    async function getShows() {
        try {
            setLoading(true);
            const res = await GetAllShowsByTheatre({ theatre_id: theatre._id });
            if (res.success) {
                setShows(res.data);
            } else {
                message.error(res.message)
            }
        } catch (error) {
            message.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    async function handleShowDelete(showId) {
        const confirm = window.confirm("Are you sure you want to delete this show!");
        if (!confirm) { return; }
        try {
            setLoading(true);
            const response = await DeleteShow({ showId: showId })
            if (response.success) {
                message.success(response.message)
            } else {
                message.error(response.message);
            }
            getShows();
        } catch (error) {
            message.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    const handleAddShow = async (values) => {
        try {
            setLoading(true);
            const response = await AddShow({
                ...values,
                theatre: theatre._id
            })
            if (response.success) {
                message.success(response.message);
            } else {
                message.error(response.message);
            }
            getShows();
            setView('table');
        } catch (error) {
            message.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    const columns = [
        {
            title: "Show Name",
            dataIndex: "name",
        },
        {
            title: "Date",
            dataIndex: "date",
            render: (text, record) => {
                return moment(text).format("MMM Do YYYY");
            },
        },
        {
            title: "Time",
            dataIndex: "time",
        },
        {
            title: "Movie",
            dataIndex: "movie",
            render: (text, record) => {
                return record.movie.title;
            },
        },
        {
            title: "Ticket Price",
            dataIndex: "ticketPrice",
        },
        {
            title: "Total Seats",
            dataIndex: "totalSeats",
        },
        {
            title: "Available Seats",
            dataIndex: "availableSeats",
            render: (text, record) => {
                return record.totalSeats - record.bookedSeats.length;
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className="flex gap-1 items-center">
                        {record.bookedSeats.length === 0 && (
                            <i
                                className="ri-delete-bin-line"
                                onClick={() => {
                                    handleShowDelete(record._id);
                                }}
                            ></i>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData()
    }, [])

    return (
        <Modal title=""
            open={openShowsModal}
            onCancel={() => setOpenShowsModal(false)}
            width={1400}
            footer={null}>
            <h1 className="text-primary text-md uppercase mb-1">
                Theatre : {theatre.name}
            </h1>

            <hr />

            <div className="flex justify-between mt-1 mb-1 items-center">
                <h1 className="text-md uppercase">
                    {view === "table" ? "Shows" : "Add Show"}
                </h1>
                {(
                    <Button
                        variant="outlined"
                        title="Add Show"
                        onClick={() => {
                            setView("form");
                        }}
                    />
                )}
            </div>


            {view === 'table' && <Table columns={columns} dataSource={shows} />}


            {view === "form" && (
                <Form layout="vertical" onFinish={handleAddShow}>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Form.Item
                                label="Show Name"
                                name="name"
                                rules={[{ required: true, message: "Please input show name!" }]}
                            >
                                <input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Date"
                                name="date"
                                rules={[{ required: true, message: "Please input show date!" }]}
                            >
                                <input
                                    type="date"
                                    min={new Date()}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Time"
                                name="time"
                                rules={[{ required: true, message: "Please input show time!" }]}
                            >
                                <input type="time" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Movie"
                                name="movie"
                                rules={[{ required: true, message: "Please select movie!" }]}
                            >
                                <select>
                                    <option value="">Select Movie</option>
                                    {movies.map((movie) => (
                                        <option value={movie._id}>{movie.title}</option>
                                    ))}
                                </select>
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Ticket Price"
                                name="ticketPrice"
                                rules={[
                                    { required: true, message: "Please input ticket price!" },
                                ]}
                            >
                                <input type="number" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Total Seats"
                                name="totalSeats"
                                rules={[
                                    { required: true, message: "Please input total seats!" },
                                ]}
                            >
                                <input type="number" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="flex justify-end gap-1">
                        <Button
                            variant="outlined"
                            title="Cancel"
                            onClick={() => {
                                setView("table");
                            }}
                        />
                        <Button variant="contained" title="SAVE" type="submit" />
                    </div>
                </Form>
            )}
        </Modal>
    )
}

export default Shows