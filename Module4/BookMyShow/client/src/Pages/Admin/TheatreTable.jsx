import React, { useEffect, useState } from "react";
import { GetAllTheatres, UpdateTheatre } from "../../apicalls/theatres";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../reduxStore/loaderSlice";
import { message, Table } from "antd";

function TheatreTable() {
    const [theatres, setTheatres] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(setLoading(true));
            const response = await GetAllTheatres();
            console.log(response.data);
            if (response.success) {
                setTheatres(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            dispatch(setLoading(false));

        }
    };

    //   const handleStatusChange = async (theatre) => {
    //     try {
    //       dispatch(ShowLoading());
    //       const response = await UpdateTheatre({
    //         theatreId: theatre._id,
    //         ...theatre,
    //         isActive: !theatre.isActive,
    //       });
    //       if (response.success) {
    //         message.success(response.message);
    //         getData();
    //       } else {
    //         message.error(response.message);
    //       }
    //       dispatch(HideLoading());
    //     } catch (error) {
    //       dispatch(HideLoading());
    //       message.error(error.message);
    //     }
    //   };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Phone",
            dataIndex: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Owner",
            dataIndex: "owner",
            render: (text, record) => {
                return record.owner.name;
            },
        },
        {
            title: "Status",
            dataIndex: "isActive",
            render: (text, record) => {
                if (text) {
                    return "Approved";
                } else {
                    return "Pending / Blocked";
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className="flex gap-1">
                        {record.isActive && (
                            <span
                                className="underline"
                            //  onClick={() => handleStatusChange(record)}
                            >
                                Block
                            </span>
                        )}
                        {!record.isActive && (
                            <span
                                className="underline"
                            // onClick={() => handleStatusChange(record)}
                            >
                                Approve
                            </span>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Table columns={columns} dataSource={theatres} />
        </div>
    );
}

export default TheatreTable;
