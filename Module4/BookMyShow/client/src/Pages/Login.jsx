import { Form, message } from "antd";
import Button from '../Components/Button';
import { Link, useNavigate } from "react-router-dom";
import { User } from "../apicalls/users";
import { useEffect } from "react";


const Login = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         navigate('/')
    //     }
    // }, [])

    const handleSubmit = async function (value) {
        try {
            const res = await User(value, 'login')
            if (res.success) {
                message.success(res.message);
                localStorage.setItem('token', res.token);
                navigate('/');
            }
            else {
                message.error(res.message);
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="card p-3 w-400">
                <h1 className="text-xl mb-1">Welcome Again! Please Login</h1>
                <hr />
                <Form layout="vertical" className="mt-1" onFinish={handleSubmit}>
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
                        <Button fullWidth title="LOGIN" type="submit" />
                        <Link to="/register" className="text-primary">
                            {" "}
                            Don't have an account? Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;