import React from 'react'

let body = {
  width:"100vw",
  height:"92vh",
  backgroundColor:"#262851",
}
let about = {
 fontWeight:"bold",
 color:"white",
 fontSize:"50px",
 textTransform:"capitalize",
 marginBottom:"80px"
}
let p = {
  marginTop:"10px",
  width:"90%",
  wordWrap:"wrap",
  color:"white",
  fontSize:"22px",
  wordSpacing:"3px",
  lineHeight:"40px",
  fontFamily:"cursive"
}
let innerDiv = {
  width:"100%",
  height:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
 
}
const About = () => {
  return (
    <body style={body}>
    <div style={innerDiv}>
    <div style={about}>About <span style={{color:"royalblue"}}>Me</span></div>
    <p style={p}>I'm a Full Stack Developer with a storng foundation HTML, CSS , JavaScript , Bootstrap , SQL , MongoDB , Node.js , Express.js , ReactJS. I'm passionate about using these skills to develop innovative web applications that are user-friendly. i'am always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving real-world problems. Currently, I'm looking for opportuniteis to join a team that values innovation and shares my enthusiasm for technology.</p>
    </div>
    </body>
  )
}

export default About;