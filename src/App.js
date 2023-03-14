import React from "react";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import About from "./components/About";

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Subscribe to </p>
//         <h1>Thapa Technical Home Page</h1>
//       </section>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
    
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

// const Service = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Service Page</h1>
//       </section>
//     </>
//   );
// };

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Contact Page</h1>
//       </section>
//     </>
//   );
// };

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
      <Routes>
          
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/About" element={<About/>}/>

      </Routes>
      </Router>
    
    </div>
  );
};

export default App;