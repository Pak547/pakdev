import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "AI Prompter",
          "Data Analyst",
          "Salesforce Developer",
          "Freelance Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
