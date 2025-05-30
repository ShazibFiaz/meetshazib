import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../../Assets/profile.png";
// import profileImage from "../../Assets/profile-dummy.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects"; // Import your existing Projects component
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Skills from "../Skills/Skills";

function Home() {
  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Meet <strong className="main-name">Usama</strong>
              </h1>

              <div className="intro-text-container">
                <Type />
              </div>
            </Col>

            <Col md={5} className="myAvtar">
              <div className="text-center">
                <div className="profile-image-container">
                  <img
                    src={profileImage}
                    alt="Usama's profile"
                    className="img-fluid profile-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}
      <Home2 />

      {/* Skills Section */}

      <Skills />

      {/* Projects Section Preview */}
        <Projects />

      {/* Contact Section */}
      <Container fluid className="contact-section" id="contact">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/usama455"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                <a
                  href="https://twitter.com/usama455"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/usama455/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/usama455"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
                {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chirp}
              isBlog={false}
              projectKey={'chirp'}
              title="Chirp- Twitter Clone"
              description=" Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI."
              ghLink="https://github.com/usama455/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chitchat}
              isBlog={false}
              projectKey={'chitchat'}
              title="ChitChat"
              description="Made with ReactJS, Express, NodeJs, MongoDB and Socket.io, ChitChat makes staying connected easy with real-time messaging, group chats, and typing indicators that keep conversations flowing naturally—just like talking in person."
              ghLink="https://github.com/usama455/chat-app-mern"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retailpulse}
              isBlog={false}
              title="Retail Pulse"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              // ghLink="https://github.com/usama455/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketmind}
              isBlog={false}
              title="Market Mind"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              // ghLink="https://github.com/usama455/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baskyt}
              projectKey={'baskyt'}
              isBlog={false}
              title="Baskyt"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              // ghLink="https://github.com/usama455/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataMigration}
              isBlog={false}
              title="Stream Vault"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              // ghLink="https://github.com/usama455/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
    </section>
    
  );
}

export default Home;
