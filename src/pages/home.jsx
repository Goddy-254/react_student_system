import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-5xl font-bold text-purple-700 mb-6">
          Student Management System
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Register, manage, update and view student records easily from one
          place.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <Link
            to="/students/add"
            className="bg-purple-700 text-white px-8 py-3 rounded-lg shadow hover:bg-purple-800 transition"
          >
            Add Student
          </Link>

          <Link
            to="/students"
            className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-lg hover:bg-purple-700 hover:text-white transition"
          >
            View Students
          </Link>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">➕</div>
            <h2 className="text-xl font-semibold text-purple-700">
              Register Students
            </h2>
            <p className="text-gray-600 mt-2">
              Add new students to the system quickly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">📋</div>
            <h2 className="text-xl font-semibold text-purple-700">
              Manage Records
            </h2>
            <p className="text-gray-600 mt-2">
              View, edit and delete student information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">🎓</div>
            <h2 className="text-xl font-semibold text-purple-700">
              Student Profiles
            </h2>
            <p className="text-gray-600 mt-2">
              Access detailed information for every student.
            </p>
          </div>
          <button
            onClick={() => toast.success("Toast works!")}
          >
            Test Toast
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;