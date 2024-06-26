import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { setLoading } from "../../reduxStore/loaderSlice";
import { AddMovie, UpdateMovie } from "../../apicalls/movies";
import moment from "moment";

function MovieForm({
    showMovieFormModal,
    setShowMovieFormModal,
    selectedMovie,
    setSelectedMovie,
    getData,
    formType,
}) {
    if (selectedMovie) {
        selectedMovie.releaseDate = moment(selectedMovie.releaseDate).format(
            "YYYY-MM-DD"
        );
    }

    const dispatch = useDispatch();
    const handleMovieFormSubmit = async (values) => {
        try {
            dispatch(setLoading(true));
            let response = null;

            if (formType === "add") {
                response = await AddMovie(values);
            } else {
                response = await UpdateMovie({
                    ...values,
                    movieId: selectedMovie._id,
                });
            }

            if (response.success) {
                getData();
                message.success(response.message);
                setShowMovieFormModal(false);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <Modal
            title={formType === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
            open={showMovieFormModal}
            onCancel={() => {
                setShowMovieFormModal(false);
                setSelectedMovie(null);
            }}
            footer={null}
            width={1000}
        >
            <Form layout="vertical" initialValues={selectedMovie} onFinish={handleMovieFormSubmit}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Movie Name" name="title">
                            <input type="text" />
                        </Form.Item>
                    </Col>

                    <Col span={23}>
                        <Form.Item label="Movie Description" name="description">
                            <textarea type="text" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Movie Duration (Min)" name="duration">
                            <input type="number" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Language" name="language">
                            <select name="" id="">
                                <option value="">Select Language</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Tamil">Tamil</option>
                            </select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Movie Release Date" name="releaseDate">
                            <input type="date" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Genre" name="genre">
                            <select name="" id="">
                                <option value="">Select Genre</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label="Poster URL" name="poster">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                </Row>

                <div className="flex justify-end gap-1">
                    <Button
                        title="Cancel"
                        variant="outlined"
                        type="button"
                        onClick={() => {
                            setShowMovieFormModal(false);
                            setSelectedMovie(null);
                        }}
                    />
                    <Button title="Save" type="submit" />
                </div>
            </Form>
        </Modal >
    );
}

export default MovieForm;