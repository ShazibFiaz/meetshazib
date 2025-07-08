
//PROFILE
import profileImage from "../src/assets/profileImage.png";
import headerLogo from "../src/assets/logo.png";
import headerLogLight from "../src/assets/logo-light.png";

//SOCIALS
import linkedin from "../src/assets/socials/linkedin.svg";
import githubIcon from "../src/assets/socials/github.svg";
import upwork from "../src/assets/socials/upwork.svg";


// SKILLS 
import reactIcon from "../src/assets/skills/react-icon.svg";
import typescriptIcon from "../src/assets/skills/typescript-icon.svg";
import htmlIcon from "../src/assets/skills/html-icon.svg";
import cssIcon from "../src/assets/skills/css-icon.svg";
import nodeJSIcon from "../src/assets/skills/nodejs.svg";
import reduxIcon from "../src/assets/skills/redux.svg";

//PROJECTS
import chirpBanner from "../src/assets/projects/chirp/chirp-banner.png";
import baskytBanner from "../src/assets/projects/baskyt/baskyt-banner.png";
import chitChatBanner from "../src/assets/projects/chitchat/chitchat.png";
import marketMindBanner from "../src/assets/projects/marketmind/marketmind.png";
import retailPulseBanner from "../src/assets/projects/retailpulse/retailpulse.png";

export const DEVELOPER_DATA = {
  heading: "Meet Usama",
  img: profileImage,
  jobTitle: "Lead Full Stack Developer",
  subheading: "6+ Years of Experience",
  about: [
    `I'm the engineer who genuinely enjoys reading documentation and solving complex problems.`,
    `I have extensive experience designing software solutions for real-world challenges, from technical puzzles to strategic systems.`,
    ` Outside of code, I love to read, write, and research, whether it's tech, strategy, or ideas that push boundaries.`,
    ` Oh, and I'm fairly good at chess, too. `,
  ],
  email: 'muhammad.usama455@gmail.com',
  phone: '00923127995898',
  logo: headerLogo,
  logoLightTheme: headerLogLight
};

export const SOCIALS = [
  {
    title: "LinkedIn",
    img: linkedin,
    url: "https://www.linkedin.com/in/usama455/",
  },
  {
    title: "Github",
    img: githubIcon,
    url: "https://github.com/usama455",
  },
  {
    title: "UpWork",
    img: upwork,
    url: "https://www.upwork.com/freelancers/~0148f4014bd2c73604",
  },
];

export const STATS = [
    {
        type: 'Clients',
        stat: '12+'
    },
        {
        type: 'Projects',
        stat: '25+'
    },
        {
        type: 'Experience',
        stat: '6+'
    }
]

export const SKILLS = [
  {
    title: "React",
    img: reactIcon,
    percentage: 90,
  },

  {
    title: "NodeJS",
    img: nodeJSIcon,
    percentage: 90,
  },

  {
    title: "Redux",
    img: reduxIcon,
    percentage: 85,
  },

  {
    title: "Typescript",
    img: typescriptIcon,
    percentage: 85,
  },

  {
    title: "HTML",
    img: htmlIcon,
    percentage: 80,
  },

  {
    title: "Css",
    img: cssIcon,
    percentage: 80,
  },

];

export const PROJECTS = [
    {
    id: "chirp",
    name: "Chirp – Twitter Clone",
    description: `Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI. Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage. Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.`,
    shortdescription: "Twitter clone focused on speed, simplicity, and real-time interaction.",
    github: "https://github.com/johndoe/taskmaster-pro",
    techstack:[ "MongoDB", "Express", "React", "Node.js","Redux"],
    banner:chirpBanner,
    media: [
      {
        type: "image",
        src: chirpBanner,
      },

      {
        type: "video",
        src: chirpBanner,
      },

      {
        type: "image",
        src: chirpBanner,
      },

      {
        type: "video",
        src: chirpBanner,
      },
    ],
    },
  {
    id: "baskyt",
    name: "Baskyt",
    description: `Baskyt is a food delivery app that enables friends, families, or teams to place orders together, even from multiple locations, to get the best possible discounts. This app makes group ordering easy, efficient, and cost-effective. Built with React and Node.js, Baskyt allows users to seamlessly add items to their cart and calculate the total price across multiple locations. Users can track orders in real-time and benefit from discounts based on the combined total. The app leverages modern technologies to offer a smooth user experience, whether you're ordering for a group at work or with friends.`,
    shortdescription: `Order together, save together. Group ordering made easy!`,
    github: "https://github.com/usama455/baskyt-app",
    media: [
      {
        type: "image",
        src: baskytBanner,
      },

      {
        type: "image",
        src:baskytBanner,
      },

      {
        type: "video",
        src: baskytBanner,
      },

      {
        type: "image",
        src: baskytBanner,
      },
    ],
    banner: baskytBanner,
    techstack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
  },
  {
    id: "chitchat",
    name: "ChitChat",
    description: `ChitChat is my take on making digital conversations feel more real. With features like real-time messaging, typing indicators, and group chats, it mimics the ease of in-person chats. Powered by React, Node, and Socket.io, it keeps things secure with JWT authentication. Whether it's friends or teams, ChitChat helps people stay connected—fast, secure, and friendly. Built with a focus on responsiveness, interactivity, and performance, ChitChat uses Socket.io for real-time bi-directional communication, enabling instant message delivery and status updates across devices.`,
    shortdescription: `ChitChat makes staying connected easy with real-time messaging,`,
    github: "https://github.com/usama455/chat-app-mern",
    media: [
      {
        type: "image",
        src: chitChatBanner,
      },

      {
        type: "video",
        src: chitChatBanner,
      },

      {
        type: "image",
        src:chitChatBanner,
      },

      {
        type: "image",
        src: chitChatBanner,
      },
    ],
    banner: chitChatBanner,
    techstack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
  },
  {
  id: "marketmind",
  name: "MarketMind",
  description: `MarketMind is a geo-intelligence dashboard built to help businesses visualize market trends and unlock smarter Route-to-Market strategies.It dynamically maps marketing data onto an interactive geo-interface—highlighting growth zones, market potential, and regional performance insights in real time.Built with Mapbox, React, and Node.js, MarketMind delivers clean visualizations, fast performance, and region-level targeting for data-driven expansion decisions.`,
  shortdescription: `Visualize regional trends to support smarter Route-to-Market decisions.`,
  github: "https://github.com/yourusername/market-mind",
  media: [
    {
      type: "image",
      src:marketMindBanner,
    },
    {
      type: "video",
      src: marketMindBanner,
    },
    {
      type: "image",
      src: marketMindBanner,
    }
  ],
  banner: marketMindBanner,
  techstack: ["React", "Node.js", "Mapbox", "Express", "MongoDB"],
},
{
  id: "retailpulse",
  name: "RetailPulse ",
  description: `RetailPulse is an advanced retail analytics platform that transforms raw audit data into actionable insights for brands and distributors.It empowers teams with real-time visibility into market share, shelf presence, and execution gaps—enabling smarter strategic planning and on-ground action.Built using React, Node.js, and MongoDB, RetailPulse visualizes data through clean dashboards, regional heatmaps, and SKU-level performance metrics to support field excellence and data-driven decisions.`,
  shortdescription: `Advanced retail analytics platform for market insights.`,
  github: "https://github.com/yourusername/retailpulse",
  media: [
    {
      type: "image",
      src: retailPulseBanner,
    },
    {
      type: "video",
      src: retailPulseBanner,
    },
    {
      type: "image",
      src: retailPulseBanner,
    }
  ],
  banner: retailPulseBanner,
  techstack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
}
]
