import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditStudent = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        admNumber: "",
        email: "",
        course: "",
        picUrl: "",
    });
    const [error, setError] = useState("")

    useEffect(() => {
        if (!id) {
            setError("Invalid student ID.");
            return;
        }

        axios.get(`http://localhost:3000/students/${id}`)
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                setError(error.response?.data?.message || error.message || "Failed to load student details.");
            });
    }, [id])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const studentRegister = async (e) => {

        e.preventDefault();

        if (!id) {
            setError("Invalid student ID.");
            return;
        }

        try {
            await axios.put(`http://localhost:3000/students/${id}`, formData);
            toast.success("Student updated successfully");
            navigate(`/students/${id}`);
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Failed to submit");
            toast.error("Failed to submit");
        }

    }

    return (

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form
                className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4" onSubmit={studentRegister}
            >
                <h2 className="text-2xl font-bold text-center text-purple-700">
                    Edit Student
                </h2>

                {error && (
                    <div className="text-red-600 bg-red-100 border border-red-200 rounded-md p-3">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block mb-1 font-medium">First Name</label>
                    <input
                        type="text"
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.firstName}
                        onChange={handleChange}
                        name="firstName"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Second Name</label>
                    <input
                        type="text"
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.secondName}
                        onChange={handleChange}
                        name="secondName"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Admission Number</label>
                    <input
                        type="number"
                        disabled
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.admNumber}
                        onChange={handleChange}
                        name="admNumber"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                        disabled

                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Course</label>
                    <input
                        type="text"
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.course}
                        onChange={handleChange}
                        name="course"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Picture</label>
                    <input
                        type="text"
                        className="w-full border-2 border-purple-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.picUrl}
                        onChange={handleChange}
                        name="picUrl"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
                >
                    Send
                </button>
            </form>
        </div>


    );
}

export default EditStudent;