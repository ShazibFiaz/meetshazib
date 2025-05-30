import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
} from "react-icons/si";

function Skills() {
  // Skill data with proficiency levels (1-5)
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: DiJavascript1, name: "JavaScript", level: 5 },
        { icon: SiTypescript, name: "TypeScript", level: 4 },
        { icon: DiReact, name: "React", level: 5 },
        { icon: SiNextdotjs, name: "Next.js", level: 4 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { icon: DiNodejs, name: "Node.js", level: 5 },
        { icon: SiExpress, name: "Express.js", level: 4 },
        { icon: DiPython, name: "Python", level: 4 },
        { icon: DiJava, name: "Java", level: 3 },
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        { icon: DiMongodb, name: "MongoDB", level: 4 },
        { icon: SiPostgresql, name: "PostgreSQL", level: 4 },
        { icon: SiRedis, name: "Redis", level: 3 },
        { icon: SiFirebase, name: "Firebase", level: 4 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { icon: DiGit, name: "Git", level: 5 },
        { icon: SiDocker, name: "Docker", level: 4 },
        { icon: SiKubernetes, name: "Kubernetes", level: 3 },
        { icon: SiAmazonaws, name: "AWS", level: 4 },
      ]
    }
  ];

  const renderSkillLevel = (level) => {
    return (
      <div className="skill-level">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className={`skill-dot ${index < level ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <Container fluid className="skills-section" id="skills">
      <Container className="skills-container">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12}>
            <h1 className="skills-title">
              Professional <strong className="purple">Skillset</strong>
            </h1>

            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills-category">
                <h2 className="category-title">{category.title}</h2>
                <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <Col 
                        xs={6} 
                        sm={4} 
                        md={3} 
                        lg={3} 
                        className="tech-icons" 
                        key={skillIndex}
                        style={{ '--delay': categoryIndex * 4 + skillIndex }}
                      >
                        <div className="tech-icon-card">
                          <IconComponent />
                          <h5>{skill.name}</h5>
                          {renderSkillLevel(skill.level)}
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;