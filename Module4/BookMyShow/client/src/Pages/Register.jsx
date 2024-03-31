import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '../Components/Button';

import { Form, message } from 'antd';

const Register = () => {
    const handleSubmit = async function (value) {
        try {
            const res = await axios.post('http://localhost:8080/register', value,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (res.data.success) {
                message.success(res.data.message);
            }
            else {
                message.error(res.data.message);
            }
        }
        catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="card p-3 w-400">
                <h1 className="text-xl mb-1">Welcome to Scaler Shows! Please Register </h1>
                <hr />
                <Form layout="vertical" className="mt-1" onFinish={handleSubmit}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input your name!" }]}
                    >
                        <input type="text" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <input type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <input type="password" />
                    </Form.Item>

                    <div className="flex flex-col mt-2 gap-1">
                        <Button fullWidth title="REGISTER" type="submit" />
                        <Link to="/login" className="text-primary">
                            {" "}
                            Already have an account? Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register