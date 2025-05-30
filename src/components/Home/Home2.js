import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 className="about-title">
              LET ME <span className="purple-highlight"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              <p>
                I'm an engineer who genuinely enjoys <span className="purple intro-highlight">reading documentation</span> and solving complex problems.
                <br />
                <br />
                I have extensive experience designing software solutions for real-world challenges, from technical puzzles to strategic systems.
                <br />
                <br />
                Outside of code, I love to <b className="purple">read, write, and research</b> — whether it's tech, strategy, or ideas that push boundaries.
                <br />
                <br />
                Oh, and I'm fairly good at <b className="purple">chess</b>, too. <span className="chess-piece">♖</span>
              </p>
            </div>
          </Col>
          <Col md={4} className="about-avatar-container">
            <div className="avatar-wrapper">
              <img 
                src={myImg} 
                className="img-fluid avatar-image" 
                alt="Usama's avatar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;