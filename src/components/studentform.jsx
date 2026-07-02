import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const StudentForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        admNumber: "",
        email: "",
        course: "",
        picUrl: ""
    })

    const redirect = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const studentRegister = async(e) => {

        e.preventDefault();

        try {

            const response =await axios.post("http://localhost:3000/students",formData);

            console.log(response)
            

            //redirect("/")
            toast.success("Form submitted suceesfully")

        } catch (error) {
            toast.error("Failed to submit")
        }

    }



    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form
                className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4" onSubmit={studentRegister}
            >
                <h2 className="text-2xl font-bold text-center text-purple-700">
                    Student Registration
                </h2>

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

export default StudentForm;