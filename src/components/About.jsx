import React from "react";
import Aos from "aos";
import "./About.css";
import { FaFacebookF, FaGithub , FaInstagram , FaLinkedin} from "react-icons/fa";
const About = () => {

  return (
    <>
      <div className="container">
        <div class="card-container">
            {/* <span class="pro">About Me</span> */}
              <img class="round" src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' alt="user" />
              <h3>Akash Patel</h3>
              <h6>KNIT Sultanpur</h6>
              <p>Full Stack Developer and <br/> Programmer</p>
              <div class="buttons">
                <ul>
                  <li><a href="https://www.linkedin.com/in/akash-patel-9330aa201/" target="_blank"><FaLinkedin/></a></li>
                  <li><a href="https://github.com/akashpatelknit" target="_blank"><FaGithub/></a></li>
                  <li><a href="https://www.instagram.com/akashknitian_/" target="_blank"><FaInstagram/></a></li>
                  <li><a href=""><FaFacebookF/></a></li>
                </ul>
                
              </div>
              <div class="skills">
                <h6>Skills</h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
            </div>
        </div>
        <div class="card-container">
            {/* <span class="pro">About Me</span> */}
              <img class="round" src='https://st3.depositphotos.com/1502311/12763/v/450/depositphotos_127632314-stock-illustration-profile-picture-illustration-woman-vector.jpg' alt="user" />
              <h3>Shivangi Singh</h3>
              <h6>KNIT Sultanpur</h6>
              <p>Full Stack Developer and <br/> Programmer</p>
              <div class="buttons">
                <ul>
                  <li><a href="https://www.linkedin.com/in/shivangi-singh-b13476204/" target="_blank"><FaLinkedin/></a></li>
                  <li><a href="https://github.com/shivangi462" target="_blank"><FaGithub/></a></li>
                  <li><a href="https://www.instagram.com/shivangi03__/" target="_blank"><FaInstagram/></a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=100046689500920" target="_blank"><FaFacebookF/></a></li>
                </ul>
                
              </div>
              <div class="skills">
                <h6>Skills</h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                   <li>Express</li>
                </ul>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
