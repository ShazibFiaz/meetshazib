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
        `Spearheaded the end-to-end development of the OneStream Live Studio, a scalable and global live streaming SaaS platform, utilizing React, Node.js, TypeScript, MySQL, Redux-Saga, Tailwind CSS, and Socket.IO.
        Managed and mentored a distributed team of 10+ full-stack developers, overseeing sprint execution, comprehensive code reviews, and streamlined deployment pipelines.
        Architected and implemented real-time collaboration features, integrating complex third-party SDKs including OAuth 2.0, Google Analytics, Mautic, and custom effects engines.
        Optimized backend systems through Redis caching, MySQL performance tuning, and designing robust, scalable APIs documented with Swagger/OpenAPI.
        Collaborated effectively with UI/UX designers via Figma and business stakeholders to deliver user-centric features within agile, remote-first workflows.
        Ensured high system uptime and streamlined DevOps practices using Yarn, NVM, and custom CI/CD workflows, significantly enhancing deployment efficiency.
        `  },

          {
    position: "Full Stack Developer",
    company: "AI Sight ",
    duration: "April 2021 - March 2022",
    location: "Lahore",
    jobProfile:
        `Developed real-time analytics dashboards using ReactJS and Node.js, providing critical insights for data-driven business operations.
        Integrated Google and Facebook Marketing APIs, directly contributing to a 25% boost in client conversion rates.
        Implemented Socket.IO-based real-time updates to significantly enhance user interactivity and data freshness.
        Utilized Chart.js for effective data visualization, enabling clearer decision-making insights.
        Automated data migration to AWS S3 via Python, Bash scripting, AWS CLI, and Linux cron jobs, resulting in saving over 6 hours per week in manual effort. `  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Electrical Telecommunications",
    year: "2019",
    college: "National University of Sciences and Technology, Rawalpindi",
  },
];

export const PROJECTS = [
  {
        id: 'chirp',
        name: "Chirp – Twitter Clone",
        description: `Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI. Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage. Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.`,
        shortdescription: "Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction.",
        github: "https://github.com/johndoe/taskmaster-pro",
      media: [
        {
        type: 'image',
        src: '/assets/Projects/chirp/chirp-banner.png'
        },

        {
        type: 'video',
        src: '/assets/Projects/chirp/chirp-mac-vid.mp4'
        },

        {
        type: 'image',
        src: '/assets/Projects/chirp/chirp-mobile.png'
        },

        {
        type: 'video',
        src: '/assets/Projects/chirp/chirp-live-tweet.mp4'
        }
      ],
      banner: '/assets/Projects/chirp/chirp-banner.png',
        techstack: "MongoDB, Express, React, Node.js, Firebase, Redux",
        weburl: "https://twitter-clone-fe-six.vercel.app/signin",
        projecttype: "Full Stack Web App",
        tags: ['react', 'mongo', 'node']
      },
            {
        id: 'baskyt',
        name: 'Baskyt',
  description: `
      Baskyt is a food delivery app that enables friends, families, or teams to place orders together, even from multiple locations, to get the best possible discounts. This app makes group ordering easy, efficient, and cost-effective.
      
      Built with React and Node.js, Baskyt allows users to seamlessly add items to their cart and calculate the total price across multiple locations. Users can track orders in real-time and benefit from discounts based on the combined total.

      The app leverages modern technologies to offer a smooth user experience, whether you're ordering for a group at work or with friends.
    `,
     shortdescription: `Order together, save together. Group ordering made easy!`,
    github: "https://github.com/usama455/baskyt-app",
      media: [
        {
        type: 'image',
        src: '/assets/Projects/baskyt/baskyt.png'
        },

        {
        type: 'image',
        src: '/assets/Projects/baskyt/baskyt-phone.png'
        },

        {
        type: 'video',
        src: '/assets/Projects/baskyt/baskyt-vid.mp4'
        },

        {
        type: 'image',
        src: '/assets/Projects/baskyt/baskyt-mac.png'
        }
      ],
      banner: '/assets/Projects/baskyt/baskyt.png',
      techstack: "MongoDB, Express, React, Node.js, Redux",
      projecttype: "Full Stack Web App",
      tags: ['react', 'mongo', 'node', 'socket.io']
      },
      {
        id: 'chitchat',
        name: 'ChitChat – Real-Time Messaging App',
description: `
      ChitChat is my take on making digital conversations feel more real. With features like real-time messaging, typing indicators, and group chats, it mimics the ease of in-person chats. 
      
      Powered by React, Node, and Socket.io, it keeps things secure with JWT authentication. Whether it's friends or teams, ChitChat helps people stay connected—fast, secure, and friendly.

      Built with a focus on responsiveness, interactivity, and performance, ChitChat uses Socket.io for real-time bi-directional communication, enabling instant message delivery and status updates across devices.
    `,
     shortdescription: `ChitChat makes staying connected easy with real-time messaging,`,
      github: "https://github.com/usama455/chat-app-mern",
      media: [
        {
        type: 'image',
        src: '/assets/Projects/chitchat/chitchat.png'
        },

        {
        type: 'video',
        src: '/assets/Projects/chitchat/chitChatMobileVid.mp4'
        },

        {
        type: 'image',
        src: '/assets/Projects/chitchat/createGroupChat.png'
        },

        {
        type: 'image',
        src: '/assets/Projects/chitchat/chatConnect.png'
        }
      ],
      banner: '/assets/Projects/chitchat/chitchat.png',
      techstack: "MongoDB, Express, React, Node.js, Redux",
      projecttype: "Full Stack Web App",
      tags: ['react', 'mongo', 'node', 'socket.io']
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
];