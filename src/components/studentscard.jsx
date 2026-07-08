import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function StudentCard({ studentData,setStudents }) {



  const deleteStudent = async (id) => {
    const result = await Swal.fire({
      title: "Delete Student?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626", // red
      cancelButtonColor: "#6b7280",  // gray
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      console.log("deleting")
      await axios.delete(`http://localhost:4000/students/${id}`);

      console.log("deleting complete")

      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

     await Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Student has been deleted.",
        timer: 5000,
        showConfirmButton: false,
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to delete student.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Students
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {studentData.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={
                student.picUrl ||
                "https://via.placeholder.com/400x250?text=Student"
              }
              alt={student.firstName}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {student.firstName} {student.secondName}
              </h2>

              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold text-purple-700">
                    Admission:
                  </span>{" "}
                  {student.admNumber}
                </p>

                <p>
                  <span className="font-semibold text-purple-700">
                    Email:
                  </span>{" "}
                  {student.email}
                </p>

                <p>
                  <span className="font-semibold text-purple-700">
                    Course:
                  </span>{" "}
                  {student.course}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to={`/students/${student.id}`}
                  className="flex-1 flex items-center justify-center bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-800 hover:shadow-lg transition-all duration-300"
                >
                  View
                </Link>

                <button
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  type="button"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StudentCard;