import React from 'react'
import { Link } from 'react-router-dom';


let syBody = {
  width: "100vw",
  height: "100%",
  backgroundColor: "#191f36",
};

let nav = {
  width: "100%",
  height: "8vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

let logo = {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  marginLeft: "200px",
  color: "#2d78cf",
  fontSize: "25px",
  fontFamily: "san-serif",
  color: "white",
  fontWeight: "bold",
  textShadow: "1px 1px 3px black"
}

let syul = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  textDecoration: "none",
  listStyleType: "none",
  alignItems: "center",
}

let syli = {
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  letterSpacing: ".5px",
  textShadow: "1px 1px 3px black"
}



const Navbar = () => {
  return (
    <body style={syBody}>
      
      
      <div style={nav}>
        
        <div style={logo}>
          Portfolio 
        </div>

        <ul style={syul}>
          <li style={syli}><Link to="/" style={{ color: "white", textDecoration: "none" }} >Home</Link></li>
          <li style={syli}><Link to="/About" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          <li style={syli}><Link to="/Skill" style={{ color: "white", textDecoration: "none" }}>Skill</Link></li>
          <li style={syli}><Link to="/Services" style={{ color: "white", textDecoration: "none" }}>Services</Link></li>
          <li style={syli}><Link to="/Project" style={{ color: "white", textDecoration: "none" }}>Projects</Link></li>
          <li style={syli}><Link to="/Certificates" style={{ color: "white", textDecoration: "none" }}>Certificates</Link></li>
          <li style={syli}><Link to="/Contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </div>

    
    
    </body>
  )
}

export default Navbar;