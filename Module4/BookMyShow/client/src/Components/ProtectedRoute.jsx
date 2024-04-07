import { message } from "antd";
import React, { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reduxStore/userSlice";
import { setLoading } from '../reduxStore/loaderSlice';

function ProtectedRoute({ children }) {

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getpresentUser = async () => {
        try {
            // dispatch(setLoading(true));
            const response = await GetCurrentUser();
            // console.log(response)
            if (response.success) {
                dispatch(setUser(response.data));
            } else {
                dispatch(setUser(null));
                message.error(response.message);
                // localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            dispatch(setUser(null));
            console.log(error)
            message.error(error.message);
        }
        finally {
            dispatch(setLoading(false));

        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getpresentUser();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        user &&
        (
            <div className="layout p-1">
                <div className="header bg-primary flex justify-between p-2">
                    <div>
                        <h1 className="text-2xl text-white cursor-pointer"
                        // onClick={() => navigate("/")}
                        >Book My Show</h1>
                    </div>

                    <div className="bg-white p-1 flex gap-1">
                        <i className="ri-shield-user-line text-primary mt-1"></i>
                        <h1
                            className="text-sm underline"
                        // onClick={() => {
                        //   if (user.isAdmin) {
                        //     navigate("/admin");
                        //   } else {
                        //     navigate("/profile");
                        //   }
                        // }}
                        >
                            {user.name}
                        </h1>

                        <i
                            className="ri-logout-box-r-line mt-1"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        ></i>
                    </div>
                </div>
                <div className="content mt-1 p-1">{children}</div>
            </div>
        )
    );
}

export default ProtectedRoute;