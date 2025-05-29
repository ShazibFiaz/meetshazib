import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/project/${props.projectKey}`);
  };

  return (
    <Card 
      className="project-card-view"
    >
      <div className="card-image-container" onClick={handleDetailsClick}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img"
          className="card-image"
        />
        <div className="image-overlay">
          <div className="overlay-content">
            <span className="view-project">View Project</span>
          </div>
        </div>
      </div>
      
      <Card.Body className="card-body-enhanced">
        <div className="card-header-section">
          <Card.Title className="card-title-enhanced">
            {props.title}
          </Card.Title>
        </div>
        
        <Card.Text className="card-description">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;