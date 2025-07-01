// src/pages/HomePage.jsx
import React, { useEffect, useState, Suspense, startTransition } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

// Import your components (adjust paths as needed)
const ClientHomeView = React.lazy(() => import("../components/Home"));
const ClientAboutView = React.lazy(() => import("../components/About"));
const ClientExperienceAndEducation = React.lazy(() => import("../components/Experience"));
const ClientProjectView = React.lazy(() => import("../components/Projects"));
const ClientContactView = React.lazy(() => import("../components/Contact"));
const ClientServicesView = React.lazy(() => import("../components/Services"));
const ClientReviewsView = React.lazy(() => import("../components/Reviews"));

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [homeSectioData, setHomeSectioData] = useState(null);
  const [sectionsData, setSectionsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const homeData = [{
        "heading": "Meet Usama",
        "summary": "Lead Full Stack Developer ",
        "hireme": "https://myportfolio.com/contact",
        "upwork": "https://www.upwork.com/freelancers/~0148f4014bd2c73604",
        "github": "https://github.com/usama455",
        "linkedin": "https://www.linkedin.com/in/usama455/",
      }];

      const aboutData = [{
        "aboutme": "I'm an engineer who genuinely enjoys reading documentation and solving complex problems.I have extensive experience designing software solutions for real-world challenges, from technical puzzles to strategic systems. Outside of code, I love to read, write, and research, whether it's tech, strategy, or ideas that push boundaries. Oh, and I'm fairly good at chess, too. ♖",
        "noofprojects": 35,
        "yearsofexperience": 6,
        "noofclients": 18,
        "skills": "JavaScript 90, TypeScript 85, React 92, Node.js 88, MongoDB 82, Express.js 85, GraphQL 78, Docker 75"
      }];

      const experienceData = [{
        "position": "Lead Full Stack Developer",
        "company": "OneStream Live",
        "duration": "April 2022 – Present",
        "location": "Finland",
        "jobprofile": "Leading a team of developers to design and build scalable full-stack applications using React, Node.js, and MongoDB. Responsible for architectural decisions, code reviews, and mentoring junior engineers."
      }];

      const educationData = [{
        "degree": "Bachelor of Engineering in Electrical Telecommunications",
        "year": "2019",
        "college": "National University of Sciences and Technology, Rawalpindi"
      }];

      const projectsData = [{
        "name": "Chirp – Twitter Clone",
        "application": "Tweet your thoughts. Instantly.",
        "github": "https://github.com/johndoe/taskmaster-pro",
        "imageUrl": [
          "https://github.com/usama455/meetusama/blob/main/src/Assets/Projects/chirp.png",
          "https://shorturl.at/eqDHd",
          "https://shorturl.at/eqDHd"
        ],
        "imageUrl1": "https://github.com/usama455/meetusama/blob/main/src/Assets/Projects/chirp.png",
        "imageUrl2": "https://shorturl.at/eqDHd",
        "imageUrl3": "https://shorturl.at/eqDHd",
        "description": `
  Chirp is a minimalist Twitter clone focused on speed, simplicity, and real-time interaction. Users can sign up, log in, and share short text-based updates in a clean, distraction-free UI.

  Built with React, Node.js, and Socket.io, Chirp enables real-time tweet delivery and live feed updates. Authentication is handled using JWT, while MongoDB powers backend data storage.

  Developed as a solo full-stack project, Chirp shows how modern technologies can create a smooth, responsive social experience with real-time communication at its core.
`,
        "shortdescription": "Twitter clone app, .",
        // "playstore": "https://play.google.com/store/apps/details?id=com.taskmaster.pro",
        "techstack": "MongoDB, Express, React, Node.js, Firebase, Redux",
        // "ios": "https://apps.apple.com/app/taskmaster-pro/id1234567890",
        "weburl": "https://twitter-clone-fe-six.vercel.app/signin",
        "projecttype": "Full Stack Web App"
      }];

      const servicesData = [{
        "title": "Frontend Development",
        "service": "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
        "fareacticon": "FaCode"
      },{
        "title": "Backend Development",
        "service": "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
        "fareacticon": "FaCode"
      },{
        "title": "Cloud Development",
        "service": "Building responsive and interactive user interfaces using modern frameworks like React and Next.js.",
        "fareacticon": "FaCode"
      }
    
    ];

      const reviewsData = [{
        "author": "Sarah Thompson",
        "content": "Working with John was a fantastic experience. He delivered our project ahead of schedule and exceeded expectations in both design and functionality.",
        "company": "Thompson Tech Solutions",
        "link": "https://thompsontech.com/testimonials/john-doe",
        "rating": 5
      }];

      // Use startTransition to wrap state updates that might cause suspense
      startTransition(() => {
        setHomeSectioData(homeData);
        setSectionsData({
          aboutData,
          experienceData,
          educationData,
          projectsData,
          servicesData,
          reviewsData,
        });
        setIsLoading(false);
      });
    }

    fetchData();
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" isLoading={isLoading} />}
      </AnimatePresence>

      {/* Show Content */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <div 
            key="content"
            className="bg-[#070E1B] max-w-screen w-full min-h-screen bg-primary text-primary"
          >
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingScreen isLoading={true} /></div>}>
              <ClientHomeView data={homeSectioData} aboutData={sectionsData.aboutData?.[0] || []} />
            </Suspense>

            {/* Other Sections Load Independently */}
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientAboutView data={sectionsData.aboutData?.[0] || []} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientServicesView data={sectionsData.servicesData} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientExperienceAndEducation
                educationData={sectionsData.educationData}
                experienceData={sectionsData.experienceData}
              />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientProjectView data={sectionsData.projectsData} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientReviewsView data={sectionsData.reviewsData} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientContactView />
            </Suspense>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;