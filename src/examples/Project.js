import React from 'react';
import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
const Project = () => {
    return (
        <body>

            <div className='bodydiv'>
                <h3>Projects</h3>
                <div className='first1'>
                    <div className='insideFirst1'>
                        <img src={project2} className='projectImg' alt="description of the image"></img>
                    </div>
                    <h1 className='proH1'>smart maintainance portal</h1>
                </div>

                <div className='Pro_second'>
                    <h1 className='proH12'>plant leaf disease prediction using machine learning </h1>
                    <div>
                        <img src={project1} className='projectImg1' alt="description of the image"></img>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default Project;