import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My full name is <span className="purple">Pakapong Mongkol </span>
            and i'm currently residing in <span className="purple"> Murrieta, California.</span> {" "}
            I am seeking a challenging position in a company that will allow me to utilize my skills and knowledge in the field of software development.
            <br />
            <br />
            Finding one’s true calling can often feel like searching for a needle in a haystack. That was until I pivoted into the tech field, driven by a belief that I wasn't living up to my fullest potential. My journey into tech was fueled by an <span className="purple">independent</span>{" "}spirit, a <span className="purple">charismatic</span>{" "}personality, and a forward-thinking mindset that effortlessly meshes with the innovative essence of programming.
            <br />
            <br />
            As you explore my <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pakapong-mongkol/" >LinkedIn</a>, my portfolio, or <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pak547">GitHub</a>, you'll notice a consistent theme, "passion". A passion that not only propelled me through a rigorous Full Stack MERN boot camp but also empowered me to take on freelancing roles for local businesses, crafting websites that serve as a testament to my dedication to technology and scalable web applications.
            <br />
            <br />
            Whether it’s through the code I write or the solutions I craft, my goal remains unwavering—to leave a mark on the tech industry by pushing the boundaries of what's possible. If you're on the lookout for someone who thrives in the face of challenges and brings a unique blend of creativity, technical prowess, and strategic thinking to the table, let's connect. Here's to exploring how we can drive technological innovation together.
            <br />
            <br />
            I have completed {" "}
            <span className="purple">
              UC Berkeley's
            </span>
            {" "}
            Full Stack Web Development Bootcamp and have a strong foundation in the{" "}
            <span className="purple">
              MERN stack.

            </span>
            {" "}
            I am also a {" "}
            <span className="purple">
              certified AI Prompter.
            </span>{" "}
            While seeking for other certifications, I am also working on a few projects to further enhance my skills.
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
