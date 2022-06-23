import React from "react";
import Layout from "../layouts/Layout";

export default function Projects() {
  return (
    <Layout title={"Projects"}>
      <p>Soon!</p>
      <div id="projects">
        <div id="project" className="daily-reminder">
          <span>Daily Reminder</span>
          {/* <span>project_desc</span> */}
        </div>
        <div id="project" className="todo-list">
          <span>Daily Reminder</span>
          {/* <span>project_desc</span> */}
        </div>
        <div id="project" className="appointments">
          <span>Appointments</span>
          {/* <span>project_desc</span> */}
        </div>
        <div id="project" className="recomendations">
          <span>Recommendations</span>
          {/* <span>project_desc</span> */}
        </div>
        <div id="project" className="playlists">
          <span>Playlists</span>
          {/* <span>project_desc</span> */}
        </div>
      </div>
    </Layout>
  );
}
