import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PAKedited.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                <br />I'm a <b className="purple">Full Stack Developer</b> skilled in the MERN which stands for
                <i>
                  <b className="purple"> MongoDB, Express, React, Node.js </b>
                </i>
                <br />
                <br />
                I have experience in building<b className="purple" ></b> &nbsp;
                <i>
                  <b className="purple">Scalable, Dynamic Web Applications
                  </b>
                  {" "}
                </i>
                with a keen engagement in{" "}
                <i>
                  <b className="purple">
                    AI Prompting, Database Management, Salesforce Development, AWS Cloud and more.
                  </b>
                </i>
                <br />
                <br />
                I have completed UC Berkeley's Full Stack Web Development Bootcamp. I am also a certified AI Prompter. While seeking for other certifications, I am also working on a few AI projects to further enhance my skills.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Pak547"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                >
                <AiOutlineTwitter />
                </a>
              </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/pakapong-mongkol/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/pakshmack/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
      </Container>
    </Container>
  );
}
export default Home2;
