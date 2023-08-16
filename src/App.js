import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Add from "./components/Add";
import About from "./components/About/About";

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Exam from "./components/Exam/Exam";
import Book from "./components/Book/Book";
import CT from "./components/CT/CT";


const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/exam" element={<Exam/>} />
        <Route path="/ct" element={<CT/>} />
        <Route path="/about" element={<About/>}/>

      </Routes>
      </Router>
     
    </>
  );
};

export default App;