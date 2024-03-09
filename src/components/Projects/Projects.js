import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HackerGrove from "../../Assets/Projects/project 2.png";
import chatify from "../../Assets/Projects/chatify.png";
import SkyScan from "../../Assets/Projects/project1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Academa"
              description="With OpenAI, this app will generate flashcards for the user to use to study and readily provides an AI chatbot to guide and answer any questions you may have about the topic."
              ghLink="https://github.com/Pak547/academa2"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HackerGrove}
              isBlog={false}
              title="HackerGrove"
              description="Habitually reinforces a healthy behaviors for software devs who want to track their time spent on projects, or learning new languages."
              ghLink="https://github.com/Pak547/hacker-grove"
              demoLink="hacker-grove-215ce88624e3.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkyScan}
              isBlog={false}
              title="SkyScan"
              description="Utilizing API calls to openWeather, this application enables users to search for weather conditions in any location in America as well as purchasable events happening in that city."
              ghLink="https://github.com/Pak547/surprise-me-daily"
              demoLink="https://pak547.github.io/surprise-me-daily/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
