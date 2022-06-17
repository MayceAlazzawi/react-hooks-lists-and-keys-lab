import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElements = projects.map((project) => {
    // console.log(project['id'])
    return (
      <span><ProjectItem myid={project['id']} name={project['name']} about={project['about']} technologies={project['technologies']} /></span>
    )
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectElements}
      </div>
    </div>
  );
}

export default ProjectList;
