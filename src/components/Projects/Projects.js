import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="With OpenAI, this application generates flashcards for the user to use to study and also has a chatbot to help you answer any questions you may have to help"
              ghLink="https://github.com/Pak547/academa2"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HackerGrove"
              description="A habit tracking application where developers can track their time spent on projects, and learning new languages."
              ghLink="https://github.com/Pak547/hacker-grove"
              demoLink="hacker-grove-215ce88624e3.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SkyScan"
              description="Utilizing API calls to openWeather, this application allows users to search for weather conditions in any city in America as well as any current events happening in that city."
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
