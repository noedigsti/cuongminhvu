import "../static/styles/Projects.scss";
import React from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Template/Card";

export default function Projects() {
  return (
    <Layout title={"Projects"}>
      <div id="projects">
        <Card
          projectTitle={"Daily Reminder"}
          projectDesc={
            "I showed my friend how to use a daily reminder app to remind him to do something every day. It pings our Discord server every day to remind us to do something."
          }
        />
        <Card
          projectTitle={"Todo List"}
          projectDesc={
            "I made a todo list app using React.js and Firebase. It's a simple app that I made using React.js and Firebase."
          }
        />
        <Card
          projectTitle={"Appointments"}
          projectDesc={
            "I made a simple appointment app using React.js and Firebase. It's a simple app that I made using React.js and Firebase."
          }
        />
        <Card
          projectTitle={"Recommendations"}
          projectDesc={
            "This is a simple app that I made using React.js and Firebase. It's a simple app that I made using React.js and Firebase."
          }
        />
        <Card
          projectTitle={"Playlists"}
          projectDesc={
            "This is a playlist app that I made using React.js and Firebase. It's a simple app that I made using React.js and Firebase."
          }
        />
      </div>
    </Layout>
  );
}
