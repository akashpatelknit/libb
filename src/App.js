import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Add from "./components/Add";
import About from "./components/About/About";

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Exam from "./components/Exam/Exam";
import Book from "./components/Book/Book";
import CT from "./components/CT/CT";
import Blog from "./components/Blog/Blog";
import Slug from "./components/Blog/Post/Slug"
import Programming from "./pages/Programming/Programming";
import Projects from "./pages/Projects/Projects";
import Portfolio from "./pages/Portfolio/Portfolio";

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
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/posts/:slug" element={<Slug/>}/>
        <Route path="/programming" element={<Programming/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/project" element={<Projects/>}/>

      </Routes>
      </Router>
     
    </>
  );
};

export default App;