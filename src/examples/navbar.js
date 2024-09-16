import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

let syli = {
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  letterSpacing: ".5px",
  textShadow: "1px 1px 3px black"
}
const Navbar = () => {
  return (
    <body className='navbarbody'>


      <div className='nav'>

        <div className='logo'>
          Portfolio
        </div>

        <ul className='syul'>
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