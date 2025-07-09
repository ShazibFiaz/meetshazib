import { Container } from "./style";
import ScrollAnimation from "react-animate-on-scroll";
import { EXPERIENCE } from "../../constants";
import { useEffect, useRef, useState } from 'react';

export function Experience() {
  const experienceRef = useRef(null);
  const [animatedExperience, setAnimatedExperience] = useState<any>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const expIndex = entry.target.getAttribute('data-exp-index');
            if (expIndex !== null) {
              setTimeout(() => {
                setAnimatedExperience((prev: any) => ({
                  ...prev,
                  [expIndex]: true
                }));
              }, parseInt(expIndex) * 300); // Stagger animation
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const expItems = document.querySelectorAll('.experience-item');
    expItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Container id="experience">
      <div className="experience-header">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>My Experience</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <p className="experience-subtitle">
            My professional journey and career highlights
          </p>
        </ScrollAnimation>
      </div>

      <div className="experience-timeline" ref={experienceRef}>
        {EXPERIENCE.map((experience, index) => {
          return (
            <div 
              key={index} 
              className={`experience-item ${animatedExperience[index] ? 'animate' : ''}`}
              data-exp-index={index}
            >
              <ScrollAnimation 
                animateIn="fadeInLeft" 
                delay={0.1 * index * 1000}
              >
                <div className="experience-timeline-dot"></div>
              </ScrollAnimation>
              
              <ScrollAnimation 
                animateIn="fadeInRight" 
                delay={0.15 * index * 1000}
              >
                <div className="experience-content">
                  <div className="experience-header-info">
                    <h3 className="experience-role">{experience.role}</h3>
                    <span className="experience-year">{experience.year}</span>
                  </div>
                  <div className="experience-company">
                    <span className="company-name">{experience.company}</span>
                    {experience.location && (
                      <span className="company-location">{experience.location}</span>
                    )}
                  </div>
                  {experience.description && (
                    <p className="experience-description">{experience.description}</p>
                  )}
                  {experience.technologies && (
                    <div className="experience-technologies">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* {experience.achievements && (
                    <ul className="experience-achievements">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )} */}
                </div>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
    </Container>
  );
}