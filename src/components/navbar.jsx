import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold">
          🎓 Student Management
        </h2>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Students
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/students/add"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition duration-300 ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "bg-purple-600 hover:bg-white hover:text-purple-700"
                }`
              }
            >
              Add Student
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;