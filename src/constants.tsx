
//PROFILE
import profileImage from "../src/assets/profileImage.png";
import headerLogo from "../src/assets/SF_LOGO.png";
import headerLogLight from "../src/assets/SF_LOGO.png";

//SOCIALS
// import linkedin from "../src/assets/socials/linkedin.svg";
import stackoverflow from "../src/assets/socials/stackoverflow.svg";
import githubIcon from "../src/assets/socials/github.svg";
import upwork from "../src/assets/socials/upwork.svg";
import mobile from "../src/assets/socials/whatsapp.svg"
import gmail from "../src/assets/socials/gmail.svg"


// SKILLS 
import reactIcon from "../src/assets/skills/react-icon.svg";
import typescriptIcon from "../src/assets/skills/typescript-icon.svg";
import awsIcon from "../src/assets/skills/aws.svg";
import azureIcon from "../src/assets/skills/azure.svg";
import nodeJSIcon from "../src/assets/skills/nodejs.svg";
import reduxIcon from "../src/assets/skills/redux.svg";
import vueIcon from "../src/assets/skills/vue-icon.svg";
import springBootIcon from "../src/assets/skills/spring-boot-logo.svg"


//PROJECTS
import nreBanner from "../src/assets/projects/nre.png";
import nhrBanner from "../src/assets/projects/nakisahr.png";
import persiviaBanner from "../src/assets/projects/persivia.png";
import movacarBanner from "../src/assets/projects/movacar.png";
import samsGarageBanner from "../src/assets/projects/samsgarage.png";
import kpmgBanner from "../src/assets/projects/kpmgbidadvisor.png";
import amwayLtdBanner from "../src/assets/projects/amwayltd.png";

export const DEVELOPER_DATA = {
  heading: "Meet Shazib",
  img: profileImage,
  jobTitle: "Full Stack Developer",
  subheading: "6+ Years of Experience",
  about: [
    `I'm the engineer who genuinely enjoys reading documentation and solving complex problems.`,
    `I have extensive experience designing software solutions for real-world challenges, from technical puzzles to strategic systems.`,
    ` Outside of code, I love to read, write, and research, whether it's tech, strategy, or ideas that push boundaries.`,
    ` Oh, and I'm fairly good at chess, too. `,
  ],
  email: 'shazibfiaz1234@gmail.com',
  phone: '+15104534786',
  logo: headerLogo,
  logoLightTheme: headerLogLight
};

export const SOCIALS = [
  // {
  //   title: "LinkedIn",
  //   img: linkedin,
  //   url: "https://www.linkedin.com/in/shazib-fiaz/",
  // },
    {
    title: "StackOverflow",
    img: stackoverflow,
    url: "https://stackoverflow.com/users/14264994/shazib-fiaz",
  },
  {
    title: "Github",
    img: githubIcon,
    url: "https://github.com/ShazibFiaz",
  },
  {
    title: "UpWork",
    img: upwork,
    url: "https://www.upwork.com/freelancers/~01043c093b31864fb7",
  },
  {
    title: "Mobile",
    img: mobile,
    url: "https://wa.me/923123980029",
  },
  {
    title: "Email",
    img: gmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=shazibfiaz12342@gmail.com",
  }
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
    title: "Java",
    img: reactIcon,
    percentage: 90,
  },

  {
    title: "Spring Boot",
    img: springBootIcon,
    percentage: 90,
  },
  {
    title: "Node",
    img: nodeJSIcon,
    percentage: 80,
  },

  {
    title: "Azure",
    img: azureIcon,
    percentage: 85,
  },

  {
    title: "AWS",
    img: awsIcon,
    percentage: 70,
  },
  {
    title: "Vue Js",
    img: vueIcon,
    percentage: 85,
  },
  {
    title: "React",
    img: reactIcon,
    percentage: 85,
  },
  {
    title: "Typescript",
    img: typescriptIcon,
    percentage: 85,
  },
  {
    title: "Redux",
    img: reduxIcon,
    percentage: 85,
  },

];

export const PROJECTS = [
    {
    id: "nre",
    name: "Nakisa Real Estate",
    description: `Developed new components and dashboards for Nakisa Real Estate (NRE), a comprehensive solution for managing owned, leased, and sub-leased properties
Utilized Java Spring Boot for backend development, ensuring robust and efficient performance of the application.
Implemented Elasticsearch to optimize property search and retrieval processes, enhancing overall system functionality.
Employed Vue.js (Vue3) for frontend development, crafting intuitive and responsive user interfaces.`,
    shortdescription: "Nakisa: AI-powered solutions to streamline assets, ensure compliance, and maximize ROI.",
    github: "https://github.com/johndoe/taskmaster-pro",
    techstack:[ "Java", "Spring Boot", "MySQL","Vue3","Quasar", "Node.js", "Python"],
    banner:nreBanner,
    media: [
      {
        type: "image",
        src: nreBanner,
      }
    ],
    },
  {
    id: "nhr",
    name: "Nakisa HR Suite",
    description: `Built for large enterprises with complex structures and evolving workforce needs, the Nakisa Workforce Planning Portfolio is an end-to-end solution powered by AI agents. Unlock advanced capabilities through an intuitive UI and collaborative workflows, supporting both strategic and operational needs in workforce planning, org design, org chart visualization, and advanced analytics.`,
    shortdescription: `Nakisa HR Suite: AI-powered workforce planning and org design for smarter, scalable people strategies.`,
    github: "https://github.com/usama455/baskyt-app",
    media: [
      {
        type: "image",
        src: nhrBanner,
      }
    ],
    banner: nhrBanner,
    techstack: ["Java", "Spring Boot", "MySQL","Vue3","Quasar", "Node.js", "Python"],
  },
  {
    id: "persivia",
    name: "Persivia Health",
    description: `Persivia’s Population Health Management Platform is a robust health data ecosystem designed to give healthcare organizations complete control of their data while ensuring seamless acquisition, integration, management, delivery, and interoperability. Powered by the Soliton® AI engine, the platform enables AI-driven clinical programs with advanced analytics, evidence-based care pathways, and quality dashboards to promote healthier populations. With Persivia CareTrak®, clinicians gain a full patient view and actionable insights directly at the point of care through bi-directional connectivity with all major EHRs. Together, these capabilities drive intelligent operations, automate workflows, and empower providers to deliver better outcomes with efficiency and precision.`,
    shortdescription: `An AI-powered Population Health Management Platform that unifies health data, drives intelligent care programs, and delivers actionable insights at the point of care.`,
    github: "https://github.com/usama455/chat-app-mern",
    media: [
      {
        type: "image",
        src: persiviaBanner,
      }
    ],
    banner: persiviaBanner,
    techstack: ["Java", "Spring", "Spring Boot", "MongoDB","KendoUI","JavaScript", "MSSQL", "Groovy"],
  },
  {
  id: "kpmg",
  name: "KPMG Bid Advisor",
  description: `KPMG Bid Advisor is a next-generation platform designed to transform the way organizations handle bid management and advisory processes. With Microsoft Entra–based Single Sign-On (SSO) and secure integration into the KPMG Cloud, the platform ensures a seamless and trusted client login experience.Built with advanced AI-driven capabilities, it enables efficient management of conversations, bid-related data, and client interactions. The solution provides a structured approach to chat management, collaboration, and document handling while ensuring enterprise-grade compliance and security.By combining intelligent analytics, automated workflows, and a user-friendly interface, KPMG Bid Advisor empowers clients to make faster, data-driven decisions and enhances overall bid success.`,
  shortdescription: `KPMG Bid Advisor is a secure, AI-driven platform that helps clients manage bids more effectively by providing intelligent insights, streamlined workflows, and seamless access through KPMG Private cloud`,
  github: "https://github.com/yourusername/market-mind",
  media: [
    {
      type: "image",
      src:kpmgBanner,
    }
  ],
  banner: kpmgBanner,
  techstack: ["React", "Node.js", "Elastic Search", "AI Models", "DotNet", "Azure Stack","MilvusDB"],
},
{
  id: "amwayltd",
  name: "Amway MLM (LTD) ",
  description: `RetailPulse is an advanced retail analytics platform that transforms raw audit data into actionable insights for brands and distributors.It empowers teams with real-time visibility into market share, shelf presence, and execution gaps—enabling smarter strategic planning and on-ground action.Built using React, Node.js, and MongoDB, RetailPulse visualizes data through clean dashboards, regional heatmaps, and SKU-level performance metrics to support field excellence and data-driven decisions.`,
  shortdescription: `Amway is a global leader in direct selling, offering high-quality health, wellness, beauty, and home care products through its multi-level marketing (MLM) model`,
  github: "https://github.com/yourusername/retailpulse",
  media: [
    {
      type: "image",
      src: amwayLtdBanner,
    }
  ],
  banner: amwayLtdBanner,
  techstack: ["Java","SpringBoot","AWS Cloud","PHP", "PostGreSQL", "MongoDB", "React","ios"],
},
{
  id: "samsGarage",
  name: "Sam's Garage",
  description: `Sam’s Garage Auto Repair, located at 3805 Raeford Road in Fayetteville, North Carolina, is your go-to destination for comprehensive vehicle maintenance and repair. With over 10 years of experience, the team delivers fast and friendly service, ensuring peace of mind for every customer. Their ASE-trained technicians provide a wide range of services including diagnostics, engine repair and replacement, transmission maintenance, brakes, heating & cooling systems, oil changes, tune-ups, shocks & struts, and more—working on both domestic and import vehicles. Committed to honesty, safety, and building long-term relationships, Sam’s emphasizes high-quality workmanship at competitive prices, backed by customer testimonials praising their reliability and integrity.`,
  shortdescription: `Sam’s Garage Auto Repair in Fayetteville, NC offers trusted, full-service auto care—covering everything from diagnostics to engine repair—with prompt, professional service and competitive rates.`,
  github: "https://github.com/yourusername/retailpulse",
  media: [
    {
      type: "image",
      src: samsGarageBanner,
    }
  ],
  banner: samsGarageBanner,
  techstack: ["Java","SpringBoot","AWS Cloud","PHP", "PostGreSQL", "MongoDB", "React","ios"],
},
{
  id: "movacar",
  name: "Movacar",
  description: `Movacar connects travelers with one-way car rental opportunities, often starting at just €1, allowing rental companies to reposition vehicles between locations. The platform offers an easy-to-use interface to search for routes, set alerts, and book vehicles directly. Collaborating with reputable rental providers, Movacar ensures a range of vehicle options and locations, making it ideal for economical travel and spontaneous trips.`,
  shortdescription: `Movacar provides low-cost one-way car rentals for vehicle relocation.`,
  github: "https://github.com/yourusername/retailpulse",
  media: [
    {
      type: "image",
      src: movacarBanner,
    }
  ],
  banner: movacarBanner,
  techstack: ["Java","SpringBoot","ThymeLeaf","PHP","MSSQL"],
}
]

export const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Walmart",
    location: "Bentonville, USA (Remote)",
    year: "2022 - Present",
    description: "Senior Software Engineer responsible for developing and architecting scalable applications using Java, Spring Boot, Kafka, ElasticSearch, and Vue 3. Integrated Azure solutions, optimized APIs with Redis, and improved code quality through unit testing and SonarQube. Specialized in Retail, Health, Financial, and Real Estate products while mentoring junior developers and delivering robust, high-performance solutions.",
    technologies: ["Java", "SpringBoot", "Scala", "Databricks", "React", "Tailwind CSS", "Vue3","Pipelines", "Azure","AWS"]
  },
  {
    role: "Java Full Stack Developer",
    company: "Nakisa",
    location: "Montreal, Canada (Remote)",
    year: "2022 - 2024",
    description: "Developed and enhanced Nakisa Real Estate (NRE) using Java Spring Boot for backend and Vue 3 for responsive frontend interfaces. Integrated Elasticsearch for efficient property search and retrieval, optimizing system performance. Delivered end-to-end HR and real estate functionalities, including dashboards, employee management, payroll, and reporting, ensuring a seamless user experience.",
    technologies: ["Java", "SpringBoot", "Vue3","Quasar", "Pyhton","AWS"]
  },
  {
    role: "Java Developer",
    company: "Movacar (DE)",
    location: "Germany (Remote - Part Time)",
    year: "March 2022 - October 2022",
    description: "Led the transformation of Movacar's platform, introducing new features and modernizing legacy systems to enhance user experience and operational efficiency.",
    technologies: ["Java","SpringBoot","ThymeLeaf","Angular"]
  },
  {
    role: "Junior Software Engineer",
    company: "Persivia",
    location: "USA (Remote)",
    year: "2020 - 2022",
    description: "Led the development of mission-critical solutions across industries, including architecting and implementing the Employee Dashboard using Java, Spring Boot, and Kendo UI. Contributed to platform-wide projects, supporting cross-company needs and enabling solutions used in multiple initiatives. Specialized in healthcare, ensuring compliance and helping the company achieve certifications that secured new clients and expanded revenue streams.",
    technologies: ["Java", "Spring", "Spring Boot", "MongoDB","KendoUI","JavaScript", "MSSQL", "Groovy","Jenkins"]
  }
];

