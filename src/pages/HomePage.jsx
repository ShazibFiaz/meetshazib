// src/pages/HomePage.jsx
import React, {  Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

import { ABOUT, EDUCATION, EXPERIENCE, HOME_DATA, PROJECTS, REVIEWS, SERVICES } from "../constants";

// Import your components (adjust paths as needed)
const ClientHomeView = React.lazy(() => import("../components/Home"));
const ClientAboutView = React.lazy(() => import("../components/About"));
const ClientExperienceAndEducation = React.lazy(() => import("../components/Experience"));
const ClientProjectView = React.lazy(() => import("../components/Projects"));
const ClientContactView = React.lazy(() => import("../components/Contact"));
const ClientServicesView = React.lazy(() => import("../components/Services"));
const ClientReviewsView = React.lazy(() => import("../components/Reviews"));

const HomePage = () => {

  return (
    <>
      {/* Show Content */}
      <AnimatePresence mode="wait">
          <div 
            key="content"
            className="bg-[#070E1B] max-w-screen w-full min-h-screen bg-primary text-primary"
          >
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingScreen isLoading={true} /></div>}>
              <ClientHomeView data={HOME_DATA} aboutData={ABOUT} />
            </Suspense>

            {/* Other Sections Load Independently */}
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientAboutView data={ABOUT} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientServicesView data={SERVICES} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientExperienceAndEducation
                educationData={EDUCATION}
                experienceData={EXPERIENCE}
              />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientProjectView data={PROJECTS} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientReviewsView data={REVIEWS} />
            </Suspense>
            
            <Suspense fallback={<div className="flex items-center justify-center h-64"><LoadingScreen isLoading={true} /></div>}>
              <ClientContactView />
            </Suspense>
          </div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;