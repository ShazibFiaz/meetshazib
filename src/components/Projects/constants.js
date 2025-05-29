import chitchat from "../../Assets/Projects/ChitChatDetailPage.png";
import baskyt from "../../Assets/Projects/BaskytDetailPage.png"
import dashboardUI from "../../Assets/Projects/chitchat-dashboard-ui.png";
import chatInterface from "../../Assets/Projects/chat-interface.png";
import chirp from "../../Assets/Projects/chirp.png"
import chirpVid from '../../Assets/Projects/chirp-mac-vid.mp4'
import chirpLiveTwtVid from '../../Assets/Projects/chirp-live-tweet.mp4'
import chirpMobile from '../../Assets/Projects/chirp-mobile.png'
const projectData = {

  chirp: 
  {
  title: "Chirp – Twitter Clone",
  tagline: "Tweet your thoughts. Instantly.",
  img: chirp, // Replace with the actual image import
  tags: ["Social", "React", "Firebase", "Realtime"],
description: `
  Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI.

  Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage.

  Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.
`,

features: [
  "Real-time tweet feed using Socket.io for instant updates",
  "Secure authentication and session handling with JWT",
  "Create and delete short text-only tweets",
  "Fully responsive design for mobile and desktop",
  "Clean, distraction-free user interface focused on usability",
  "Scalable REST API powered by Express and MongoDB"
],
stack: {
  "Frontend": ["React.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Socket.io"],
  "Database": ["MongoDB"],
  "Authentication": ["JSON Web Tokens (JWT)"],
  "State Management": ["React Hooks", "Context API"],
  "Deployment": ["Render", "Vercel"] // or use your actual platforms (e.g., Heroku, Netlify)
}
,
  github: "https://github.com/usama455/twitter-clone", 
  demo: "https://twitter-clone-fe-six.vercel.app/signin", 
  whySpecial: `Chirp takes the core of social media—sharing thoughts—and distills it into a fast, real-time experience. By leveraging Firebase's tools, it removes backend complexity while still delivering a responsive and fully interactive app.`,
  
  // NEW: Media section with support for images and videos
media: [
  {
    type: 'video',
    src: chirpLiveTwtVid,
    title: 'Real-Time Interaction',
    caption: 'Chirp delivers instant feedback with real-time tweet updates using Socket.io. This video shows users posting tweets and seeing them reflected across all connected clients without delay.'
  },
  {
    type: 'image',
    src: chirpMobile,
    title: 'Mobile-First Design',
    caption: 'Built with responsive design principles, Chirp offers a seamless user experience across all screen sizes. Whether on mobile, tablet, or desktop, the interface remains intuitive and fast.'
  },
  {
    type: 'video',
    src: chirpVid,
    title: 'Clean & Minimal UI',
    caption: 'This walkthrough highlights Chirp’s modern, clutter-free interface—focused on usability and readability. The design ensures content remains front and center while offering smooth transitions.'
  }
]

,
  
  challenges: [
    {
      challenge: "Real-time feed updates without page reloads",
      solution: "Used Firestore's onSnapshot listeners to sync tweets in real time"
    },
    {
      challenge: "Ensuring clean and minimal UI across all screen sizes",
      solution: "Leveraged Tailwind CSS utilities and responsive design principles"
    },
    {
      challenge: "Managing user authentication state across components",
      solution: "Implemented React Context API with Firebase Auth persistence"
    }
  ],
  startDate: "October 2023",
  completionDate: "December 2023",
  category: "Social Media",
  priority: 2
},
//   chirp: {
//   title: "Chirp – Twitter Clone",
//   tagline: "Tweet your thoughts. Instantly.",
//   img: chirp, // Replace with the actual image import
//   tags: ["Social", "React", "Firebase", "Realtime"],
//   description: `
//     Chirp is a minimalist Twitter clone built for speed, simplicity, and real-time interaction. Users can sign up, log in, and instantly start posting short-form text updates. 

//     Built with React and Firebase, Chirp uses Firestore’s real-time database to sync tweets instantly across users. Its clean interface, responsive design, and core features recreate the essence of Twitter without the noise.

//     Designed as a solo full-stack project, Chirp demonstrates how React, Firebase Auth, and Firestore can work together to build a seamless, real-time social experience.
//   `,
//   features: [
//     "Real-time tweet feed powered by Firestore listeners",
//     "Sign up and log in securely with Firebase Auth",
//     "Post and delete short text-based tweets",
//     "Responsive layout optimized for all devices",
//     "Minimalist, distraction-free UI",
//     "Instant update propagation across users"
//   ],
//   stack: {
//     "Frontend": ["React.js", "Tailwind CSS"],
//     "Backend": ["Firebase Functions (optional)"],
//     "Database": ["Firebase Firestore"],
//     "Authentication": ["Firebase Auth"],
//     "State Management": ["React Hooks"],
//     "Deployment": ["Firebase Hosting"]
//   },
//   github: "https://github.com/usama455/twitter-clone", 
//   demo: "https://twitter-clone-fe-six.vercel.app/signin", 
//   whySpecial: `Chirp takes the core of social media—sharing thoughts—and distills it into a fast, real-time experience. By leveraging Firebase’s tools, it removes backend complexity while still delivering a responsive and fully interactive app.`,
//   screenshots: [
//     {
//       img: chirp, 
//       caption: "Live tweet feed with real-time updates"
//     },
//     {
//       img: chirp, 
//       caption: "Tweet creation interface"
//     }
//   ],
//   challenges: [
//     {
//       challenge: "Real-time feed updates without page reloads",
//       solution: "Used Firestore’s onSnapshot listeners to sync tweets in real time"
//     },
//     {
//       challenge: "Ensuring clean and minimal UI across all screen sizes",
//       solution: "Leveraged Tailwind CSS utilities and responsive design principles"
//     }
//   ],
//   startDate: "October 2023",
//   completionDate: "December 2023",
//   category: "Social Media",
//   priority: 2
// },

  chitchat: {
    title: "ChitChat – Real-Time Messaging App",
    tagline: "Digital conversation that feels real.",
    img: chitchat,
    tags: ["Real-time", "Full Stack", "MERN", "Socket.io"],
    description: `
      ChitChat is my take on making digital conversations feel more real. With features like real-time messaging, typing indicators, and group chats, it mimics the ease of in-person chats. 
      
      Powered by React, Node, and Socket.io, it keeps things secure with JWT authentication. Whether it's friends or teams, ChitChat helps people stay connected—fast, secure, and friendly.

      Built with a focus on responsiveness, interactivity, and performance, ChitChat uses Socket.io for real-time bi-directional communication, enabling instant message delivery and status updates across devices.
    `,
    features: [
      "Instant, real-time messaging with smooth delivery across devices",
      "Typing indicators and user presence detection for that 'in-person' feel",
      "Create and manage group chats with ease",
      "JWT-secured login and session management",
      "Beautiful, responsive UI that adapts to mobile and desktop",
      "RESTful APIs for clean and scalable backend structure",
    ],
    stack: {
      "Frontend": ["React.js", "CSS3", "Bootstrap"],
      "Backend": ["Node.js", "Express.js"],
      "Real-Time Engine": ["Socket.io"],
      "Authentication": ["JSON Web Tokens (JWT)"],
      "Database": ["MongoDB"],
      "State Management": ["React Context API"],
      "Deployment": ["Heroku", "Netlify"]
    },
    github: "https://github.com/usama455/chat-app-mern",
    demo: null,
    whySpecial: `ChitChat doesn't just send messages—it recreates the experience of casual conversation in a digital space. Whether you're chatting one-on-one or with a group, its responsive UI and real-time interactions make it a seamless tool for staying in touch.`,
    // Optional: Add screenshots if you have them
    screenshots: [
      {
        img: dashboardUI,
        caption: "Main dashboard showing active conversations"
      },
      {
        img: chatInterface,
        caption: "Real-time messaging interface with typing indicators"
      }
    ],
    // Optional: Add development challenges and solutions
    challenges: [
      {
        challenge: "Maintaining persistent socket connections",
        solution: "Implemented reconnection logic and heartbeat mechanism to ensure reliable real-time communication"
      },
      {
        challenge: "Managing group chat state across clients",
        solution: "Created a robust state synchronization system using Socket.io rooms and events"
      }
    ],
    // You could add more metadata for better organization and filtering
    startDate: "January 2023",
    completionDate: "April 2023",
    category: "Communication",
    priority: 1
  },

  baskyt: {
    title: "Baskyt – Food Delivery App",
    tagline: "Order together, save together. Group ordering made easy!",
    img: baskyt,
    tags: ["Food Delivery", "Full Stack", "React", "Node.js"],
    description: `
      Baskyt is a food delivery app that enables friends, families, or teams to place orders together, even from multiple locations, to get the best possible discounts. This app makes group ordering easy, efficient, and cost-effective.
      
      Built with React and Node.js, Baskyt allows users to seamlessly add items to their cart and calculate the total price across multiple locations. Users can track orders in real-time and benefit from discounts based on the combined total.

      The app leverages modern technologies to offer a smooth user experience, whether you’re ordering for a group at work or with friends.
    `,
    features: [
      "Order together with friends, family, or teammates for big discounts",
      "Supports ordering from multiple locations in real-time",
      "Real-time order tracking and updates",
      "User-friendly interface with easy navigation",
      "Built with a focus on speed, efficiency, and usability",
      "Seamless checkout process with payment integration"
    ],
    stack: {
      "Frontend": ["React.js", "CSS3", "Material UI"],
      "Backend": ["Node.js", "Express.js"],
      "Database": ["MongoDB"],
      "State Management": ["React Context API"],
      "Payment Integration": ["Stripe API"],
      "Deployment": ["Heroku", "Netlify"]
    },
    github: "https://github.com/usama455/baskyt-app",
    demo: null,
    whySpecial: `Baskyt is not just a food delivery app—it’s a way to make ordering food more social and cost-effective. By allowing multiple users to order from different locations, Baskyt provides an innovative solution to group ordering, all while ensuring discounts and savings for the users.`,
    // screenshots: [
    //   {
    //     img: baskytUI,
    //     caption: "Dashboard view showing the group order setup"
    //   }
    // ],
    challenges: [
      {
        challenge: "Synchronizing real-time data across multiple locations",
        solution: "Implemented a robust state management system to keep track of orders and updates across different locations in real time"
      },
      {
        challenge: "Handling payment processing for multiple users",
        solution: "Integrated Stripe for secure, seamless transactions and group payment processing"
      }
    ],
    startDate: "July 2023",
    completionDate: "October 2023",
    category: "E-Commerce",
    priority: 2
  },
};

export default projectData;