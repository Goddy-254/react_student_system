import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



const StudentDetails = () => {
    const { id } = useParams();
    const [studentData, setData] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/students/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
    }, [id])

    const deleteStudent = async (studentId) => {
        const result = await Swal.fire({
            title: "Delete Student?",
            text: "You won't be able to undo this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, Delete",
        });

        if (!result.isConfirmed) return;

        try {
            console.log("Deleting student", studentId);
            const response = await axios.delete(`http://localhost:4000/students/${studentId}`);
            console.log("Delete response", response.status);

            Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Student has been deleted.",
                timer: 1000,
                showConfirmButton: false,
            });

            setTimeout(() => {
                navigate("/");
            }, 1600);
        } catch (error) {
            console.error("Delete failed", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to delete student.",
            });
        }
    };



    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            {error ? (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full p-6 text-center text-red-600">
                    <p>Failed to load student details.</p>
                    <p className="mt-2 text-sm text-gray-600">{error.message || String(error)}</p>
                </div>
            ) : !studentData ? (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full p-6 text-center text-gray-700">
                    <p>Loading student details…</p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
                    {/* Student Image */}
                    <img
                        src={studentData.picUrl}
                        alt={studentData.firstName}
                        className="w-full h-72 object-cover"
                    />

                    {/* Student Details */}
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-center text-purple-700">
                            {studentData.firstName} {studentData.secondName}
                        </h2>

                        <p className="text-center text-gray-500 mt-1">
                            Student Profile
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-700">
                                    Admission No.
                                </span>
                                <span className="text-gray-600">
                                    {studentData.admNumber}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-700">
                                    Email
                                </span>
                                <span className="text-gray-600 break-all">
                                    {studentData.email}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-700">
                                    Course
                                </span>
                                <span className="text-gray-600">
                                    {studentData.course}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-700">
                                    Student ID
                                </span>
                                <span className="text-gray-600">
                                    {studentData.id}
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-4">
                            <Link className="flex-1 bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300" to={`/students/edit/${studentData.id}`}>
                                Edit
                            </Link>

                            <Link
                                className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                                onClick={() => deleteStudent(studentData.id)}>
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentDetails;