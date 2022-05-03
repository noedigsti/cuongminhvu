// import { useState } from "react";

import Layout from "../layouts/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <p>Hello World!</p>
      <br />
      <p>
        Born and raised in Vietnam, I traveled to Australia to study the
        technical design of interactive media products. In January 2022, I
        graduated with a Bachelor's degree in Games and Interactive Environments
        from{" "}
        <a href="https://www.qut.edu.au/">
          Queensland University of Technology
        </a>
        .
      </p>
      <br />
      <p>
        Technology has always been one of my top interests and I have been
        programming since high school when I was first introduced to{" "}
        <a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">
          <i>Pascal</i>
        </a>
        ...
      </p>
    </Layout>
  );
};

export default About;
