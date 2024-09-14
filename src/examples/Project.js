import React from 'react';
import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";

const Project = () => {
    return (
        <div className='bodydiv'>
            <h3>Projects</h3>
            <div className='first1'>
                <div className='insideFirst1'>
                    <img src={project2} className='projectImg' alt="Smart Maintenance Portal screenshot"></img>
                </div>
                <h1 className='proH1'>Smart Maintenance Portal</h1>
            </div>

            <div className='Pro_second'>
                <h1 className='proH12'>Plant Leaf Disease Prediction Using Machine Learning</h1>
                <div>
                    <img src={project1} className='projectImg1' alt="Plant leaf disease prediction app screenshot"></img>
                </div>
            </div>
        </div>
    )
}

export default Project;
