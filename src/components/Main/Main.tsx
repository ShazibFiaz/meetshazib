import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
// import python from "../../assets/python.svg"
// import java from "../../assets/java.svg"
// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
// import sassIcon from "../../assets/sass-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
// import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        // options={{
        //   "fullScreen": {
        //     "enable": true,
        //     "zIndex": 1
        //   },
        //   "detectRetina": true,
        //   "fpsLimit": 60,
        //   "interactivity": {
        //     "events": {
        //       "onClick": {
        //         "enable": true,
        //         "mode": "push"
        //       },
        //       "onDiv": {
        //         "elementId": "repulse-div",
        //         "enable": false,
        //         "mode": "repulse"
        //       },
        //       "onHover": {
        //         "enable": true,
        //         "mode": "bubble",
        //         "parallax": {
        //           "enable": false,
        //           "force": 60,
        //           "smooth": 10
        //         }
        //       },
        //       "resize": true
        //     },
        //     "modes": {
        //       "bubble": {
        //         "distance": 400,
        //         "duration": 2,
        //         "opacity": 0.8,
        //         "size": 2,
        //       },
        //       "connect": {
        //         "distance": 80,
        //         "lineLinked": {
        //           "opacity": 0.5
        //         },
        //         "radius": 60
        //       },
        //       "grab": {
        //         "distance": 400,
        //         "lineLinked": {
        //           "opacity": 1
        //         }
        //       },
        //       "push": {
        //         "quantity": 2
        //       },
        //       "remove": {
        //         "quantity": 2
        //       },
        //       "repulse": {
        //         "distance": 200,
        //         "duration": 0.4
        //       }
        //     }
        //   },
        //   "particles": {
        //     "color": {
        //       "value": "#ffffff"
        //     },
        //     "lineLinked": {
        //       "blink": false,
        //       "color": "#000",
        //       "consent": false,
        //       "distance": 150,
        //       "enable": false,
        //       "opacity": 0.4,
        //       "width": 1
        //     },
        //     "move": {
        //       "attract": {
        //         "enable": false,
        //         "rotate": {
        //           "x": 600,
        //           "y": 1200
        //         }
        //       },
        //       "bounce": false,
        //       "direction": "none",
        //       "enable": true,
        //       "outMode": "out",
        //       "random": false,
        //       "speed": 2,
        //       "straight": false
        //     },
        //     "number": {
        //       "density": {
        //         "enable": true,
        //         "area": 800
        //       },
        //       "limit": 20,
        //       "value": 15,
        //     },
        //     "opacity": {
        //       "animation": {
        //         "enable": true,
        //         "minimumValue": 0.2,
        //         "speed": 1,
        //         "sync": false
        //       },
        //       "random": true,
        //       "value": 1
        //     },
        //     "rotate": {
        //       "animation": {
        //         "enable": true,
        //         "speed": 5,
        //         "sync": false
        //       },
        //       "direction": "random",
        //       "random": true,
        //       "value": 0
        //     },
        //     "shape": {
        //       "character": {
        //         "fill": false,
        //         "font": "Verdana",
        //         "style": "",
        //         "value": "*",
        //         "weight": "400"
        //       },
        //       "image": [
        //         {
        //           "src": boostrapIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": cssIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": wordpress,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": shopify,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": htmlIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": jsIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         // {
        //         //   "src": mysqlIcon,
        //         //   "width": 20,
        //         //   "height": 20
        //         // },
        //         {
        //           "src": python,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": java,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": reactIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": sassIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         {
        //           "src": typescriptIcon,
        //           "width": 20,
        //           "height": 20
        //         },
        //         // {
        //         //   "src": vscodeIcon,
        //         //   "width": 20,
        //         //   "height": 20
        //         // },
        //         {
        //           "src": vueIcon,
        //           "width": 20,
        //           "height": 20
        //         },

        //       ],
        //       "polygon": {
        //         "sides": 5
        //       },
        //       "stroke": {
        //         "color": "#000000",
        //         "width": 0
        //       },
        //       "type": "image"
        //     },
        //     "size": {
        //       "animation": {
        //         "enable": false,
        //         "minimumValue": 0.1,
        //         "speed": 40,
        //         "sync": false
        //       },
        //       "random": false,
        //       "value": 16
        //     }
        //   },
        //   "polygon": {
        //     "draw": {
        //       "enable": false,
        //       "lineColor": "#ffffff",
        //       "lineWidth": 0.5
        //     },
        //     "move": {
        //       "radius": 10
        //     },
        //     "scale": 1,
        //     "url": ""
        //   },
        //   "background": {
        //     "image": "",
        //     "position": "50% 50%",
        //     "repeat": "no-repeat",
        //     "size": "cover"
        //   }
        // }}

        options={{
          autoPlay: true,
          background: {
            // color: {
            //   value: "#000000",
            // },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              opacity: 1,
              color: {
                value: "",
              },
            },
            enable: false,
          },
          clear: true,
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
            },
            modes: {
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
              attract: {
                distance: 200,
                duration: 0.4,
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                value: 1,
              },
              vertical: {
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  speed: 20,
                  sync: true,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  sync: true,
                  offset: 0,
                },
              },
            },
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 6,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
              animation: {
                count: 0,
                enable: false,
                speed: 2,
                sync: false,
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                sync: false,
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              split: {
                count: 1,
                factor: {
                  value: 3,
                },
                rate: {
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
            },
            life: {
              count: 0,
              delay: {
                value: 0,
                sync: false,
              },
              duration: {
                value: 0,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "#016fb9",
              },
              consent: false,
              distance: 150,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          key: "basic",
          name: "Basic",
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}


      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
