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
    duration: "Apr 2022 – Present",
    location: "Remote (Finland)",
    jobProfile: [
      "Led development of a real-time live streaming SaaS using React, Node.js, TypeScript, and MySQL."
    ]
  },
  {
    position: "Full Stack Developer",
    company: "AI Sight",
    duration: "Apr 2021 – Mar 2022",
    location: "Remote (Lahore)",
    jobProfile: [
      "Built real-time analytics dashboards and automated cloud workflows using React, Node.js, and AWS."
    ]
  },
  {
    position: "Full Stack Developer",
    company: "Isaac’s Code",
    duration: "Mar 2020 – Mar 2021",
    location: "Islamabad",
    jobProfile: [
      "Developed a food delivery app with React, MySQL, JWT auth, Stripe, and Google Maps integration."
    ]
  },
  {
    position: "Associate Software Developer",
    company: "PearlGates Software Solutions",
    duration: "Jul 2019 – Feb 2020",
    location: "Lahore",
    jobProfile: [
      "Built a smart home automation app with React, Node.js, Socket.IO, and AWS; integrated IoT devices."
    ]
  }
];


export const EDUCATION = [

    {
    degree: "AWS Fundamentals: Going Cloud-Native",
    year: "2022",
    college: "National University of Sciences and Technology, Rawalpindi",
  },
    {
    degree: "AWS Fundamentals: Building Serverless Applications",
    year: "2022",
    college: "coursera.org/verify/G3P24ZZYGBC4",
  },
    {
    degree: "Bachelor of Engineering in Electrical Telecommunications",
    year: "2019",
    college: "coursera.org/verify/HDBNQG76AFGJ",
  },
];

export const PROJECTS = [
  {
    id: "chirp",
    name: "Chirp – Twitter Clone",
    description: `Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI. Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage. Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.`,
    shortdescription:
      "Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction.",
    github: "https://github.com/johndoe/taskmaster-pro",
    media: [
      {
        type: "image",
        src: "/assets/Projects/chirp/chirp-banner.png",
      },

      {
        type: "video",
        src: "/assets/Projects/chirp/chirp-mac-vid.mp4",
      },

      {
        type: "image",
        src: "/assets/Projects/chirp/chirp-mobile.png",
      },

      {
        type: "video",
        src: "/assets/Projects/chirp/chirp-live-tweet.mp4",
      },
    ],
    banner: "/assets/Projects/chirp/chirp-banner.png",
    techstack: "MongoDB, Express, React, Node.js, Firebase, Redux",
    weburl: "https://twitter-clone-fe-six.vercel.app/signin",
    projecttype: "Full Stack Web App",
    tags: ["react", "mongo", "node"],
  },
  {
    id: "baskyt",
    name: "Baskyt",
    description: `
      Baskyt is a food delivery app that enables friends, families, or teams to place orders together, even from multiple locations, to get the best possible discounts. This app makes group ordering easy, efficient, and cost-effective.
      
      Built with React and Node.js, Baskyt allows users to seamlessly add items to their cart and calculate the total price across multiple locations. Users can track orders in real-time and benefit from discounts based on the combined total.

      The app leverages modern technologies to offer a smooth user experience, whether you're ordering for a group at work or with friends.
    `,
    shortdescription: `Order together, save together. Group ordering made easy!`,
    github: "https://github.com/usama455/baskyt-app",
    media: [
      {
        type: "image",
        src: "/assets/Projects/baskyt/baskyt-banner.png",
      },

      {
        type: "image",
        src: "/assets/Projects/baskyt/baskyt-phone.png",
      },

      {
        type: "video",
        src: "/assets/Projects/baskyt/baskyt-vid.mp4",
      },

      {
        type: "image",
        src: "/assets/Projects/baskyt/baskyt-mac.png",
      },
    ],
    banner: "/assets/Projects/baskyt/baskyt-banner.png",
    techstack: "MongoDB, Express, React, Node.js, Redux",
    projecttype: "Full Stack Web App",
    tags: ["react", "mongo", "node", "socket.io"],
  },
  {
    id: "chitchat",
    name: "ChitChat – Real-Time Messaging App",
    description: `
      ChitChat is my take on making digital conversations feel more real. With features like real-time messaging, typing indicators, and group chats, it mimics the ease of in-person chats. 
      
      Powered by React, Node, and Socket.io, it keeps things secure with JWT authentication. Whether it's friends or teams, ChitChat helps people stay connected—fast, secure, and friendly.

      Built with a focus on responsiveness, interactivity, and performance, ChitChat uses Socket.io for real-time bi-directional communication, enabling instant message delivery and status updates across devices.
    `,
    shortdescription: `ChitChat makes staying connected easy with real-time messaging,`,
    github: "https://github.com/usama455/chat-app-mern",
    media: [
      {
        type: "image",
        src: "/assets/Projects/chitchat/chitchat.png",
      },

      {
        type: "video",
        src: "/assets/Projects/chitchat/chitChatMobileVid.mp4",
      },

      {
        type: "image",
        src: "/assets/Projects/chitchat/createGroupChat.png",
      },

      {
        type: "image",
        src: "/assets/Projects/chitchat/chatConnect.png",
      },
    ],
    banner: "/assets/Projects/chitchat/chitchat.png",
    techstack: "MongoDB, Express, React, Node.js, Redux",
    projecttype: "Full Stack Web App",
    tags: ["react", "mongo", "node", "socket.io"],
  },
];

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
  {
    author: "Sarah Thompson",
    content:
      "Working with John was a fantastic experience. He delivered our project ahead of schedule and exceeded expectations in both design and functionality.",
    company: "Thompson Tech Solutions",
    link: "https://thompsontech.com/testimonials/john-doe",
    rating: 5,
  },
  {
    author: "Sarah Thompson",
    content:
      "Working with John was a fantastic experience. He delivered our project ahead of schedule and exceeded expectations in both design and functionality.",
    company: "Thompson Tech Solutions",
    link: "https://thompsontech.com/testimonials/john-doe",
    rating: 5,
  },
];
