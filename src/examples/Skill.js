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
        <body className="skillBody">
            <div className="name">Skills</div>
            <main className="skillmain">
                <div className="item">
                    <img className="skillImg" alt={html} src={html}></img>
                    <img className="skillImg" alt={css} src={css}></img>
                    <img className="skillImg" alt={javascript}  src={javascript}></img>

                    <img className="skillImg" alt ={react} src={react}></img>
                    <img className="skillImg" alt={java} src={java}></img>
                    <img className="skillImg" alt={mysql} src={mysql}></img>
                </div>
            </main>
        </body >
    )
}

export default Skill;