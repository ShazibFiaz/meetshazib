import Chirp from '../assets/Projects/chirp.png'
import ChirpMobile from '../assets/Projects/chirp-mobile.png'
import ChirpMacVid from '../assets/Projects/chirp-mac-vid.mp4'
import ChirpLive from '../assets/Projects/chirp-live-tweet.mp4'


export const HOME_DATA = {
  heading: "Meet Usama",
  summary: "Lead Full Stack Developer ",
  hireme: "https://myportfolio.com/contact",
  upwork: "https://www.upwork.com/freelancers/~0148f4014bd2c73604",
  github: "https://github.com/usama455",
  linkedin: "https://www.linkedin.com/in/usama455/",
};

export const ABOUT = {
  aboutme:
    "I'm an engineer who genuinely enjoys reading documentation and solving complex problems.I have extensive experience designing software solutions for real-world challenges, from technical puzzles to strategic systems. Outside of code, I love to read, write, and research, whether it's tech, strategy, or ideas that push boundaries. Oh, and I'm fairly good at chess, too. ♖",
  totalProjects: 35,
  totalExperience: 6,
  totalClients: 18,
  skills:
    "JavaScript 90, TypeScript 85, React 92, Node.js 88, MongoDB 82, Express.js 85, GraphQL 78, Docker 75",
};
export const EXPERIENCE = [
  {
    position: "Lead Full Stack Developer",
    company: "OneStream Live",
    duration: "April 2022 – Present",
    location: "Finland",
    jobProfile:
      "Leading a team of developers to design and build scalable full-stack applications using React, Node.js, and MongoDB. Responsible for architectural decisions, code reviews, and mentoring junior engineers.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Electrical Telecommunications",
    year: "2019",
    college: "National University of Sciences and Technology, Rawalpindi",
  },
];

export const PROJECTS = [{
        "name": "Chirp – Twitter Clone",
        "description": `Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI. Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage. Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.`,
        "shortdescription": "Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction.",
        "github": "https://github.com/johndoe/taskmaster-pro",
        "imageUrl": [Chirp,ChirpMacVid, ChirpMobile,ChirpLive],
        // "playstore": "https://play.google.com/store/apps/details?id=com.taskmaster.pro",
        "techstack": "MongoDB, Express, React, Node.js, Firebase, Redux",
        // "ios": "https://apps.apple.com/app/taskmaster-pro/id1234567890",
        "weburl": "https://twitter-clone-fe-six.vercel.app/signin",
        "projecttype": "Full Stack Web App",
        tags: ['react', 'mongo', 'node']
      }];
export const SERVICES = [
  {
    title: "Frontend Development",
    service:
      "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
    fareacticon: "FaCode",
  },
  {
    title: "Backend Development",
    service:
      "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
    fareacticon: "FaCode",
  },
  {
    title: "Cloud Development",
    service:
      "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
    fareacticon: "FaCode",
  },
];

export const REVIEWS = [
  {
    author: "Sarah Thompson",
    content:
      "Working with John was a fantastic experience. He delivered our project ahead of schedule and exceeded expectations in both design and functionality.",
    company: "Thompson Tech Solutions",
    link: "https://thompsontech.com/testimonials/john-doe",
    rating: 5,
  },
];
