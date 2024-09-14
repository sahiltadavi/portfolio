import React from 'react';
import logoImg from "../assets/logoImg.jpg";

let section = {
  width: "100%",
  margin: "auto",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
let body = {
  width: "100vw",
  height: "92vh",
  backgroundColor: "#262840",
}
let left = {
  padding:"20px",
  width: "50%",
  height: "50%",
  margin: "0px 0px 0px 20px",
  color: "white",
  lineHeight:"10px"
};

let p1 = {
  marginTop:"50px",
  fontSize: "25px",
  fontWeight: "bold",
  textShadow:"3px 3px 5px black"
};
let h11 = {
  fontSize: "60px",
  marginTop:"50px",
  textShadow:"3px 5px 5px black"
};
let h11span = {
   textShadow:"3px 3px 5px black",
  fontSize: "35px",
  marginTop:"50px",
};
let p2 = {
   textShadow:"3px 3px 5px black",
  fontSize: "18px",
  marginTop:"10px",
  lineHeight:"30px",
  marginBottom:"30px",
  
};
let img = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "10px solid yellow",
}
let button = {
  ouline: "none",
  border: "none",
  height: "40px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  fontSize: "17px",
  borderRadius: "17px",
  paddingLeft: "15px",
  backgroundColor: "royalBlue",
  fontFamily: "san-serif",
  fontWeight: "bold",
  letterSpacing: ".3px",
   boxShadow:"3px 3px 15px black",
}
let right = {
  height: "50%",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};




const Home = () => {
  return (
    <body style={body}>
      <section style={section}>
        <div style={left}>
          <p style={p1}>Hello, I am</p>
          <h1 style={h11}>Sahil Tadavi<br /><h3 style={h11span}>I'm a Full Stack Developer</h3></h1>
          <p style={p2}>Building Bridges Between Front-end and Back-end , Transforming Ideas into Web Reality</p>
          <button  style={button}>Download Resume</button>
        </div>

        <div style={right}>
          <img src={logoImg} alt="logoImg" style={img}></img>
        </div>

      </section>
    </body>
  )
}

export default Home;