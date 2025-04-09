import React from "react";
import Links from "./Links";

function About({ bio = null, github, linkedin }) {
  return (
    <div id="about">
      {bio && bio !== "" ? <p>{bio}</p> : null}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
