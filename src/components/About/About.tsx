import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { DEVELOPER_DATA, SKILLS, STATS } from "../../constants";
import chess from '../../assets/chess.gif';
import { useEffect, useRef, useState } from 'react';

export function About() {
  const skillsRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState<any>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = entry.target.getAttribute('data-skill-index');
            if (skillIndex !== null) {
              setTimeout(() => {
                setAnimatedSkills((prev: any) => ({
                  ...prev,
                  [skillIndex]: true
                }));
              }, parseInt(skillIndex) * 200); // Stagger animation
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillRows = document.querySelectorAll('.skill-row');
    skillRows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Why Hire Me For Your Next Project?</h2>
        </ScrollAnimation>
        {DEVELOPER_DATA.about.map((data, index) => {
          return (
            <ScrollAnimation
              key={index}
              animateIn="fadeInLeft"
              delay={0.3 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                {data}{" "}
                {index + 1 === DEVELOPER_DATA.about.length && (
                  <img src={chess} alt="Hello" width="50px" />
                )}
              </p>
            </ScrollAnimation>
          );
        })}
        <div className="stats">
          {STATS.map((stat, index) => {
            return (
              <>
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="stat-item">
                    <span className="stat-number">{stat.stat}</span>
                    <span className="stat-label">{stat.type}</span>
                  </div>
                </ScrollAnimation>
                {index + 1 !== STATS.length && (
                  <span className="separator">|</span>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className="skills-section" ref={skillsRef}>
        <ScrollAnimation animateIn="fadeInRight">
          <h2>My Skills</h2>
        </ScrollAnimation>
        <div className="hard-skills">
          {SKILLS.map((skill, index) => {
            return (
              <div key={index} className="skill-row" data-skill-index={index}>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * index * 1000}>
                  <div className="skill-icon">
                    <img src={skill.img} alt={skill.title} />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" delay={0.15 * index * 1000}>
                  <div className="skill-content">
                    <div className="skill-header">
                      <span className="skill-name">{skill.title}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="bar-container">
                      <div
                        className={`bar-fill ${animatedSkills[index] ? 'animate' : ''}`}
                        style={{ 
                          '--target-width': `${skill.percentage}%`,
                          width: animatedSkills[index] ? `${skill.percentage}%` : '0%'
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}