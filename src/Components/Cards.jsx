import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                allCourses = allCourses.concat(array);
            });
            return allCourses;
        } else {
            return props.courses[category] || []; // Ensuring this always returns an array
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return (
                        <Card 
                            key={course.id} // Ensure you're using a unique key (assuming course has an 'id')
                            course={course} 
                            likedCourses={likedCourses} 
                            setLikedCourses={setLikedCourses} 
                        />
                    );
                })
            }
        </div>
    );
};

export default Cards;
