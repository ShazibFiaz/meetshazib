import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Hello from "../../assets/Hello.gif";
import { DEVELOPER_DATA, SOCIALS } from "../../constants";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <span className="hello-text">
            Hey there <img src={Hello} alt="Hello" width="40px" />
          </span>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{DEVELOPER_DATA.heading}</h1>
        </ScrollAnimation>
        <ScrollAnimation  animateIn="fadeInUp" delay={0.4 * 1000}>
          <span className="title-text">
            
            <Typewriter
                    words={DEVELOPER_DATA.jobTitle.split(',')}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
            {/* {DEVELOPER_DATA.jobTitle} */}
            </span>
               
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">{DEVELOPER_DATA.subheading}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            {SOCIALS.map((socialPlatform) => {
              return (
                <a href={socialPlatform.url} target="_blank" rel="noreferrer" key={socialPlatform.title} >
                  <img src={socialPlatform.img} alt={socialPlatform.title} />
                </a>
              );
            })}
          </div>
        </ScrollAnimation>
        <div className="hero-image-mobile">
          <ScrollAnimation animateIn="fadeInRight" delay={1.2 * 1000}>
            <img src={DEVELOPER_DATA.img} alt="Usama" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={DEVELOPER_DATA.img} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}