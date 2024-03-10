import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/picofme.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <RevealOnScroll>
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
                  <b className="purple">Dynamic Web Applications
                  </b>
                  {" "}
                </i>
                with a keen engagement in{" "}
                <i>
                  <b className="purple">
                    AI Prompting, Data Analysis, and Cyber Security
                  </b>
                </i>
                <br />
                <br />
                My journey in tech is driven by a crave for creation and a continuous quest for innovation, especially in leveraging <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </RevealOnScroll>
        <RevealOnScroll>
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
        </RevealOnScroll>
      </Container>
    </Container>
  );
}
export default Home2;
