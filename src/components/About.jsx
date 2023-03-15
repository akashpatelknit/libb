import React from "react";
import "./About.css";
import { FaFacebookF, FaGithub , FaInstagram , FaLinkedin} from "react-icons/fa";
import Myimage from "./akash.jpeg";
import Myimage2 from "./shivangi.jpeg";
const About = () => {
  return (
    <>
      <div className="brief">
        {/* <p>
          Welcome to our About Us page! We are a team of dedicated individuals
          who are passionate about delivering high-quality products and services
          to our customers. Our mission is to provide innovative solutions that
          meet the needs of our clients and help them achieve their goals. Our
          team is comprised of experts in their respective fields, with years of
          experience and a commitment to excellence. We work closely with our
          clients to understand their needs and tailor our solutions to meet
          their unique requirements. Image 1: (Insert image of team at work) At
          our core, we believe that teamwork is essential to success. We work
          collaboratively, drawing on each other's strengths and expertise to
          deliver exceptional results. Our team is made up of professionals from
          diverse backgrounds and skill sets, which allows us to bring a broad
          perspective to every project we undertake. Image 2: (Insert image of
          product or service) We are proud of the products and services we
          offer, and we are committed to delivering the highest quality
          solutions to our customers. Our goal is to help our clients achieve
          their objectives and exceed their expectations. You can connect with
          us on social media by following the links below. We welcome your
          feedback and look forward to hearing from you. Social Media Icons:
          (Insert social media icons with links) Thank you for visiting our
          About Us page. We hope you have gained a better understanding of who
          we are and what we do. If you have any questions or would like to
          learn more about our products and services, please don't hesitate to
          contact us
        </p> */}
      </div>
      <div className="container">
        <div className="container1">
          <img src={Myimage} alt="Myimage" className="imgStyle " />
          <div className="intro">
            <h4>AKASH PATEL</h4>
            <p>A Full Stack Developer</p>
          </div>
          <div className="icon">
            <a href="http://www.google.com">
              <FaFacebookF className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaGithub className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaInstagram className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaLinkedin className="icon1" />
            </a>
          </div>
        </div>
        <div className="container1">
          {/* <img src={Myimage2} alt="Myimage" className="imgStyle" /> */}
          <div className="intro">
            <h4>shivangi singh</h4>
            <p>abhi seekh rhe h</p>
          </div>

          <div className="icon">
            <a href="http://www.google.com">
              <FaFacebookF className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaGithub className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaInstagram className="icon1" />
            </a>
            <a href="http://www.google.com">
              <FaLinkedin className="icon1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
