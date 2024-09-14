import React from "react";
import "./Skill.css";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.jpg";
import react from "../assets/react.jpg";
import java from "../assets/java.png";
import mysql from "../assets/mysql.jpg";

function Skill() {
    return (
        <body>
            <div className="name">Skills</div>
            <main>
                <div className="item">
                    <img className="skillImg" src={html}></img>
                    <img className="skillImg"src={css}></img>
                    <img className="skillImg"src={javascript}></img>

                    <img className="skillImg"src={react}></img>
                    <img className="skillImg"src={java}></img>
                    <img className="skillImg"src={mysql}></img>
                </div>
            </main>
        </body >
    )
}

export default Skill;