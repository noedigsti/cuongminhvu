// import { useState } from "react";

import Layout from "../layouts/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <p>Hello! 👋</p>
      <br />
      <p>
        I'm a Graduate student with a Bachelor's Degree in Games and
        Interactive Environments from {" "}
        <a href="https://www.qut.edu.au/">
          Queensland University of Technology
        </a>
      </p>
      <br />
      <p>
        I enjoy building things that live on the internet, whether that be
        websites, applications, or anything in between. My goal is to always
        build products that are well-designed, well-coded, and well-tested.
        
        ...
      </p>
    </Layout>
  );
};

export default About;
