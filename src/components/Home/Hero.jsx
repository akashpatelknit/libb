import React from 'react';
import logo from "./sunset.png"
import "./hero.css"
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="head_title">
          <h1>What Book Are You Looking For</h1>
        </div>
        <div className="disc">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium neque modi voluptatibus, fugiat ullam sit delectus nisi doloribus, sapiente maxime in. Dolore labore sunt aspernatur vel suscipit provident ea distinctio?</p>
        </div>
        <div className="buttons">
          <button>explore now</button>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
