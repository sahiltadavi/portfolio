import React from 'react';
import logoImg from "../assets/logoImg.jpg";
import "./Home.css";

const Home = () => {
  return (
    <body className='homeBody'>
      <section className='homeSection'>
        <div className='homeLeft'>
          <p className='homeP1'>Hello, I am</p>
          <h1 className='homeh11'>Sahil Tadavi<br /><h3 className='homeh11span'>I'm a Full Stack Developer</h3></h1>
          <p className='homep2'>Building Bridges Between Front-end and Back-end , Transforming Ideas into Web Reality</p>
          <button className='h'>
            <a href='https://drive.google.com/uc?export=download&id=11e8hkiMb2puuYtBH7mvqhY2kuNs0x7f3' style={{textDecoration:"none"}}>
            download Resume
            </a>
          </button>
        </div>
        
        <div className='homeRight'>
          <img src={logoImg} alt="logoImg" className='homeImg'></img>
        </div>

      </section>
    </body>
  )
}

export default Home;