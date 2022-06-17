import React from "react";

function ProjectItem({ name, about, technologies, myid }) {
  console.log(myid)
  const addingTec = technologies.map((tech) => {
    return <span>{tech}</span>
  })
  return (
    <div className="project-item" key={myid}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {addingTec}
      </div>
    </div>
  );
}

export default ProjectItem;
