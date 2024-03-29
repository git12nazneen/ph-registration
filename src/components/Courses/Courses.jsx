import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleFunction}) => {

    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('courseInfo.json')
        .then(res =>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-4">
           
            {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                    handleFunction={handleFunction}
                    >  </Course>)
            }
           
        </div>
    );
};

export default Courses;