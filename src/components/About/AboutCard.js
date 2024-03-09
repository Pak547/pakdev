import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My full name is <span className="purple">Pakapong Mongkol </span>
            residing in <span className="purple"> Murrieta, California</span>
            <br />
            <br />
            I am seeking a challenging position in a company that will allow me to utilize my skills and knowledge in the field of software development.
            <br />
            <br />
            I have completed UC Berkeley's Full Stack Web Development Bootcamp and have a strong foundation in the MERN stack. I am also a certified AI Prompter. While seeking for other certifications, I am also working on a few projects to further enhance my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "All big things come from small beginnings"{" "}
          </p>
          <footer className="blockquote-footer">James Clear "Atomic Habits"</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
