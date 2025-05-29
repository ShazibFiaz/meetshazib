import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import projectData from "./constants";
import { BsGithub, BsArrowLeft } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaCheckCircle, FaExternalLinkAlt, FaPlay, FaImage } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import "./ProjectDetails.css";

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

  const renderMediaItem = (media, index) => {
    const isLeft = index % 2 === 0;
    
    const mediaContent = media.type === 'video' ? (
      <video
        src={media.src}
        className="media-video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
      />
    ) : (
      <img 
        src={media.src} 
        alt={media.caption || `Media ${index + 1}`} 
        className="media-image" 
      />
    );

    return (
      <div key={index} className={`media-row ${isLeft ? 'media-left' : 'media-right'}`}>
        <div className="media-content">
          <div className="media-item">
            {mediaContent}
            <div className="media-overlay">
              {media.type === 'video' ? 
                <MdVideoLibrary className="media-type-icon" /> : 
                <FaImage className="media-type-icon" />
              }
            </div>
          </div>
        </div>
        <div className="media-text">
          <h5 className="media-title">{media.title || `${media.type === 'video' ? 'Video' : 'Screenshot'} ${index + 1}`}</h5>
          {media.caption && <p className="media-description">{media.caption}</p>}
        </div>
      </div>
    );
  };

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

        {/* New Layout: Image and Overview in same row */}
        <Row className="main-content-row">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="project-image-container-new">
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-detail-img-new" 
              />
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="overview-section-new">
              <h4 className="overview-heading">
                <span className="overview-icon">📖</span>
                <span className="overview-title">Project Overview</span>
              </h4>
              <div className="overview-content">
                <p className="overview-text">{project.description}</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Centered Action Buttons */}
        <Row className="action-buttons-row">
          <Col md={12}>
            <div className="project-actions-centered">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn-new">
                <BsGithub className="btn-icon" /> 
                <span>View on GitHub</span>
                <FaExternalLinkAlt className="external-icon" />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn-new">
                  <CgWebsite className="btn-icon" /> 
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
              )}
            </div>
          </Col>
        </Row>

        <Row className="features-stack-row">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="content-section features-section compact-section">
              <h4 className="section-heading">
                <span className="section-icon">🚀</span> Key Features
              </h4>
              <div className="compact-list">
                {project.features.slice(0, 5).map((feature, index) => (
                  <div className="compact-item" key={index}>
                    <FaCheckCircle className="compact-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="content-section stack-section compact-section">
              <h4 className="section-heading">
                <span className="section-icon">🧰</span> Tech Stack
              </h4>
              <div className="compact-stack">
                {Object.entries(project.stack).slice(0, 3).map(([category, tools], index) => (
                  <div key={index} className="compact-stack-row">
                    {/* <span className="stack-category-compact">{category}:</span> */}
                    <div className="stack-tools-compact">
                      {tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="stack-tool-compact">{tool}</span>
                      ))}
                      {tools.length > 3 && <span className="more-indicator">+{tools.length - 3} more</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {project.media && project.media.length > 0 && (
          <Row className="media-row">
            <Col md={12}>
              <div className="content-section media-section">
                <h4 className="section-heading">
                  <span className="section-icon">🎬</span> Media Gallery
                </h4>
                <div className="media-container">
                  {project.media.map((media, index) => renderMediaItem(media, index))}
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* {project.whySpecial && (
          <Row className="special-row">
            <Col md={12}>
              <div className="content-section special-section">
                <h4 className="section-heading">
                  <span className="section-icon">🌟</span> Why It Stands Out
                </h4>
                <p className="section-text">{project.whySpecial}</p>
              </div>
            </Col>
          </Row>
        )} */}

        {/* {project.challenges && project.challenges.length > 0 && (
          <Row className="challenges-row">
            <Col md={12}>
              <div className="content-section challenges-section">
                <h4 className="section-heading">
                  <span className="section-icon">⚡</span> Challenges & Solutions
                </h4>
                <div className="challenges-grid">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="challenge-card">
                      <div className="challenge-problem">
                        <h6>Challenge:</h6>
                        <p>{item.challenge}</p>
                      </div>
                      <div className="challenge-solution">
                        <h6>Solution:</h6>
                        <p>{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        )}
         */}
        <div className="project-footer">
          <p className="explore-more">Want to see more of my work?</p>
          <Link to="/projects" className="footer-btn">
            Explore More Projects
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default ProjectDetails;