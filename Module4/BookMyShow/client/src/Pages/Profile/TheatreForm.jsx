import { Modal, Form, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../../reduxStore/loaderSlice';
import Button from '../../Components/Button';
import { AddTheatre, UpdateTheatre } from '../../apicalls/theatres';

function TheatreForm({ showTheatreFormModal,
    setShowTheatreFormModal,
    formType,
    setFormType,
    selectedTheatre,
    setSelectedTheatre,
    getData }) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log(user)
    async function handleSubmit(values) {
        try {
            dispatch(setLoading(true));
            let res = null;
            if (formType === "add") {
                res = await AddTheatre(values);
            } else {
                values.theatreId = selectedTheatre._id;
                res = await UpdateTheatre(values);
            }
            if (res.success) {
                message.success(res.message)
            }
            else {
                message.error(res.message);
            }
            setShowTheatreFormModal(false);
            getData()
        }
        catch (error) {
            message.error(error.message)
        }
        finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <Modal
            title={formType === "add" ? "Add Theatre" : "Edit Theatre"}
            open={showTheatreFormModal}
            onCancel={() => {
                setShowTheatreFormModal(false);
                setSelectedTheatre(null);
            }}
            footer={null}
        >
            <Form
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={selectedTheatre}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input theatre name!" }]}
                >
                    <input type="text" />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: "Please input theatre address!" }]}
                >
                    <textarea type="text" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        { required: true, message: "Please input theatre phone number!" },
                    ]}
                >
                    <input type="text" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input theatre email!" }]}
                >
                    <input type="text" />
                </Form.Item>
                <div className="flex justify-end gap-1">
                    <Button
                        title="Cancel"
                        variant="outlined"
                        type="button"
                        onClick={() => {
                            setShowTheatreFormModal(false);
                            setSelectedTheatre(null);
                        }}
                    />
                    <Button title="Save" type="submit" />
                </div>
            </Form>
        </Modal>
    );
}

export default TheatreForm;