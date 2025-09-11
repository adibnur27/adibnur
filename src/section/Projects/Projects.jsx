import React, { useState } from "react";

import ButtonCTA from "../../component/Button/ButtonCTA";
import { projectsData } from "../../data/projectsData";
import { useTranslation } from "react-i18next";
import ProjectModal from "../../component/Modal/ProjectModal";

const Projects = () => {
  const { t } = useTranslation();
  console.log(projectsData);
 const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project); 
  };

  const closeModal = () => {
    setSelectedProject(null); 
  };


  return (
    <div className="min-h-screen py-10 lg:px-40 md:px-20 px-5 dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-transparent dark:via-darkOrange from-lightOrange via-lightWhite to-lightWhite dark:to-transparent">
      <h3 className="font-playfair font-bold text-center text-4xl">{t('titleProject')}</h3>
      <div className="my-10 ">
        {projectsData.map((tour) => (
          <div key={tour.id} className="flex flex-col md:flex-row gap-5 justify-between items-center dark:bg-lightWhite/10 bg-white/30 backdrop-blur-md p-5 rounded-xl shadow-md mt-2">
            {/* text */}
            <div className="space-y-2 md:w-1/2 md:order-1 order-2">
              <p className="text-darkOrange dark:text-lightOrange">{t(tour.projectType)}</p>
              <h4 className="text-xl font-bold">{t(tour.title)}</h4>
              <p className="line-clamp-2 md:w-2/3">{t(tour.description)}</p>
              <p className="line-clamp-1 md:w-1/2"><span className="font-bold">Tools: </span>{t(tour.tools)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-bold">Duration: </span> {t(tour.duration)}</p>
               <ButtonCTA onClick={() => handleClick(tour)}>
                {t(tour.buttonProject)}
              </ButtonCTA>
            </div>
    
            {/* image */}
            <div className="mt-3 md:order-2 order-1  w-1/2 h-auto">
              <img
                src={t(tour.image)} // translate image URL
                alt={t(tour.title)}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
};

export default Projects;
