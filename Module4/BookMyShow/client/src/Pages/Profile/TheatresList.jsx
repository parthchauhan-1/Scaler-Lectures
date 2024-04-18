import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import Button from "../../Components/Button";
import TheatreForm from "./TheatreForm";
import Shows from "./Shows";

import { Table, message } from 'antd'
import { setLoading } from "../../reduxStore/loaderSlice";
import { DeleteTheatre, GetAllTheatresByOwner } from "../../apicalls/theatres";

export default function TheatreList() {
    const [theatres, setTheatres] = useState([]);
    const [formType, setFormType] = useState('');
    const [openShowsModal = false, setOpenShowsModal] = useState(false);
    const [selectedTheatre, setSelectedTheatre] = useState(null);
    const [showTheatreFormModal, setShowTheatreFormModal] = useState(false)

    const user = useSelector(state => state.user)
    async function getData() {
        try {
            const res = await GetAllTheatresByOwner(user._id);
            if (res.success) {
                message.success(res.message);
                setTheatres(res.data);
            }
        } catch (error) {
            message.error(error.message)
        }
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleDeleteTheatre(theatreId) {
        const confirm = window.confirm("Are you sure you want to delete this theatre?");
        if (!confirm) return;
        try {
            dispatch(setLoading(true))
            const res = await DeleteTheatre({ theatreId: theatreId });
            if (res.success) {
                message.success(res.message);
                getData();
            }
        } catch (error) {
            message.error(error.message)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

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
                    <div className="flex gap-1 items-center">
                        <i
                            className="ri-delete-bin-line"
                            onClick={() => {
                                handleDeleteTheatre(record._id);
                            }}
                        ></i>
                        <i
                            className="ri-pencil-line"
                            onClick={() => {
                                setFormType("edit");
                                setSelectedTheatre(record);
                                setShowTheatreFormModal(true);
                            }}
                        ></i>

                        {record.isActive && (
                            <span
                                className="underline"
                                onClick={() => {
                                    setSelectedTheatre(record);
                                    setOpenShowsModal(true);
                                }}
                            >
                                Shows
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
            <div className="flex justify-end mb-1">
                <Button
                    variant="outlined"
                    title="Add Theatre"
                    onClick={() => {
                        setFormType("add");
                        setShowTheatreFormModal(true);
                    }}
                />
            </div>

            <Table columns={columns} dataSource={theatres} />

            {showTheatreFormModal && (
                <TheatreForm
                    showTheatreFormModal={showTheatreFormModal}
                    setShowTheatreFormModal={setShowTheatreFormModal}
                    formType={formType}
                    setFormType={setFormType}
                    selectedTheatre={selectedTheatre}
                    setSelectedTheatre={setSelectedTheatre}
                    getData={getData}
                />
            )}

            {openShowsModal && (
                <Shows
                    openShowsModal={openShowsModal}
                    setOpenShowsModal={setOpenShowsModal}
                    theatre={selectedTheatre}
                />
            )}
        </div>
    );
}
