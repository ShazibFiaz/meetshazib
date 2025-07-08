import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { PROJECTS } from "../../constants";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {PROJECTS.map((project,index) => {
          return (
            <ScrollAnimation key={index} animateIn="flipInX">
              <div className="project">
                <div className="project-banner">
                  <img 
                    src={project.banner} 
                    alt={`${project.name} banner`}
                    className="banner-image"
                  />
                </div>

                <div className="body">
                  <h3>{project.name}</h3>
                  <p>{project.shortdescription}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {project.techstack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </Container>
  );
}