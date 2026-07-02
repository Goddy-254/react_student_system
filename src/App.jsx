import { useState } from "react";
import StudentForm from "./components/studentform";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import ViewStudents from "./pages/students";
import { ToastContainer } from "react-toastify";
import StudentDetails from "./components/studentdetails";
import EditStudent from "./pages/editstudent";

function App() {
  return (
    <>
    <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ViewStudents />} />
        <Route path="/students/add" element={<StudentForm />} />
        <Route path="/students/:id" element={< StudentDetails />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
      </Routes>
    </>
  )
}

export default App;
