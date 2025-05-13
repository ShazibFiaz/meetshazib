import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import projectData from "./constants";
import { BsGithub, BsArrowLeft } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";

function ProjectDetails() {
  const { projectKey } = useParams();
  const project = projectData[projectKey];

  if (!project) {
    return (
      <Container className="project-detail-section">
        <div className="project-not-found">
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't seem to exist.</p>
          <Link to="/projects" className="btn btn-primary">
            <BsArrowLeft className="me-2" /> Back to Projects
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="project-detail-section">
      <Particle />
      <Container className="project-detail-container">
        <Link to="/projects" className="back-link">
          <BsArrowLeft /> Back to Projects
        </Link>
        
        <div className="project-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
          {project.tags && (
            <div className="project-tags">
              <AiFillTags className="tag-icon" />
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="project-image-container">
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-detail-img" 
              />
            </div>
            
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <BsGithub /> GitHub <FaExternalLinkAlt className="ms-1" />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <CgWebsite /> Live Demo <FaExternalLinkAlt className="ms-1" />
                </a>
              )}
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="content-section">
              <h4 className="section-heading">
                <span className="section-icon">📖</span> Overview
              </h4>
              <p className="text-light">{project.description}</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="content-section">
              <h4 className="section-heading">
                <span className="section-icon">🚀</span> Key Highlights
              </h4>
              <div className="highlight-grid">
                {project.features.map((feature, index) => (
                  <div className="highlight-card" key={index}>
                    <FaCheckCircle className="highlight-icon" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="content-section">
              <h4 className="section-heading">
                <span className="section-icon">🧰</span> Tech Stack
              </h4>
              <div className="stack-cards">
                {Object.entries(project.stack).map(([category, tools], index) => (
                  <div key={index} className="stack-card">
                    <h5>{category}</h5>
                    <div className="stack-tools">
                      {tools.map((tool, i) => (
                        <span key={i} className="stack-tool">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {project.whySpecial && (
          <Row className="mt-4">
            <Col md={12}>
              <div className="special-section">
                <h4 className="section-heading">
                  <span className="section-icon">🌟</span> Why It Stands Out
                </h4>
                <p>{project.whySpecial}</p>
              </div>
            </Col>
          </Row>
        )}
        
        {project.screenshots && project.screenshots.length > 0 && (
          <Row className="mt-4">
            <Col md={12}>
              <div className="content-section">
                <h4 className="section-heading">
                  <span className="section-icon">📸</span> Screenshots
                </h4>
                <div className="screenshots-grid">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="screenshot-item">
                      <img 
                        src={screenshot.img} 
                        alt={screenshot.caption || `Screenshot ${index + 1}`} 
                        className="screenshot-img" 
                      />
                      {screenshot.caption && <p className="screenshot-caption">{screenshot.caption}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}
        
        <div className="project-footer">
          <p className="explore-more">Want to see more of my work?</p>
          <Link to="/projects" className="btn btn-primary">
            Explore More Projects
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default ProjectDetails;