import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t} = useTranslation()
  return (
    <div className="min-h-screen py-10 dark:bg-gradient-to-br  bg-gradient-to-bl  dark:from-transparent dark:via-darkOrange from-lightOrange via-lightWhite to-lightWhite dark:to-transparent">
      <h3 className="font-playfair font-bold text-center text-4xl">{t('titleSkills')}</h3>
      <div className="md:px-20 py-10 flex md:gap-14 gap-5 flex-wrap justify-center md:w-[70%] mx-auto">
        <div className="w-16">
          <img src="/iconSkills/html5.svg" alt="Hyper Markup Languange" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/css3.svg" alt="Cascading Style Sheet" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/javascript.svg" alt="Cascading Style Sheet" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/react.svg" alt="Cascading Style Sheet" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/tailwind.svg" alt="Tailwind Library" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/bootstrap.svg" alt="Bootstrap FrameWork" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/postgresql.svg" alt="Postgre Sql" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/mysql.svg" alt="Postgre Sql" />
        </div>
        <div className="w-20">
          <img src="/iconSkills/supabase.svg" alt="Postgre Sql" />
        </div>
      </div>
      <h3 className="font-playfair font-bold text-center text-4xl">{t('titleTools')}</h3>
      <div className="md:px-20 py-10 flex md:gap-14 gap-5 flex-wrap justify-center px-1 items-center md:w-[85%] mx-auto">
        <div className="w-16">
          <img src="/iconToolsWorkflow/git-plain.svg" alt="Git " />
        </div>
        <div className="w-16 bg-darkBlack p-1 rounded-md">
          <img src="/iconToolsWorkflow/Github.svg" alt="Github" />
        </div>
        <div className="w-16">
          <img src="/iconToolsWorkflow/gitlab.svg" alt="GitLab" />
        </div>
        <div className="w-16">
          <img src="/iconToolsWorkflow/agile-scrum.svg" alt="Agile And Scrum" />
        </div>
        <div className="w-16">
          <img src="/iconToolsWorkflow/restapi.svg" alt="Rest Api" />
        </div>
        <div className="w-16">
          <img src="/iconToolsWorkflow/vscode.svg" alt="Visual Studio Code" />
        </div>
        <div className="w-14">
          <img src="/iconToolsWorkflow/trello.svg" alt="Trello" />
        </div>
        <div className="w-16">
          <img src="/iconToolsWorkflow/figma-original.svg" alt="Figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
