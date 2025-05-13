import chitchat from "../../Assets/Projects/ChitChatDetailPage.png";
import baskyt from "../../Assets/Projects/BaskytDetailPage.png"
import dashboardUI from "../../Assets/Projects/chitchat-dashboard-ui.png";
import chatInterface from "../../Assets/Projects/chat-interface.png";

const projectData = {
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

  // Template for adding more projects:
  /* 
  projectKey: {
    title: "Project Name",
    tagline: "Short, catchy description",
    img: importedImage,
    tags: ["Tag1", "Tag2", "Tag3"],
    description: `Detailed description of the project`,
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    stack: {
      "Category1": ["Tool1", "Tool2"],
      "Category2": ["Tool3", "Tool4"],
    },
    github: "https://github.com/username/repo",
    demo: "https://demo-link.com",
    whySpecial: `What makes this project unique or special`,
    screenshots: [
      {
        img: screenshot1,
        caption: "Caption for screenshot 1"
      }
    ],
    challenges: [
      {
        challenge: "Challenge faced",
        solution: "How it was solved"
      }
    ],
    startDate: "Month Year",
    completionDate: "Month Year",
    category: "Project Category",
    priority: 2
  }
  */
};

export default projectData;