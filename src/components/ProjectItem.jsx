import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description || "Sin descripción"}</p>
      <div className="members">
        <strong>Miembros:</strong> {project.members.length}
      </div>
      {project.icon && <img src={project.icon} alt={`${project.name} icon`} />}
    </div>
  );
};

export default ProjectItem;
