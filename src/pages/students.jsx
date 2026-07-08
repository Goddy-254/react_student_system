import { useEffect, useState } from "react";
import StudentCard from "../components/studentscard";

function ViewStudents() {
  
    const [students,setStudents] = useState([]);
    const [error,setError] = useState("")

    useEffect(()=>{
        fetch("http://localhost:4000/students")
        .then((response)=>{
          return response.json();
        })
        .then((data) =>{
            setStudents(data);
        })
        .catch(error =>{
             setError(error);
        })

    },[])

  return (
  <div className="container">
   <StudentCard 
   studentData={students}
   setStudents={setStudents}
   />
  </div>
  );
}

export default ViewStudents;