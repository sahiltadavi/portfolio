import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './examples/navbar';
import About  from './examples/About';
import Home from "./examples/Home";
import Skill from './examples/Skill';
import Contact from './examples/Contact';
import Project from './examples/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  );
}





export default App;
