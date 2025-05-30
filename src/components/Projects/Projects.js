import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectData from "./constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Object.entries(projectData).map(([projectKey, project]) => {
            console.log(project);
            return (
              <Col md={4} className="project-card" key={projectKey}>
                <ProjectCard
                  imgPath={project.img} 
                  isBlog={false}
                  projectKey={projectKey}
                  title={project.title || projectKey} 
                  description={project.miniDesc || "No description available"}
                  ghLink={project.ghLink || "#"}
                  demoLink={project.demoLink} 
                />
              </Col>
            );
          })}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
