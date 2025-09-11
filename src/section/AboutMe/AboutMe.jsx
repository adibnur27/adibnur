import React from "react";
import ButtonCTA from "../../component/Button/ButtonCTA";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

    // scroll ke section contact
  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - (-45); // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // download CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/AdibNur_CV.pdf"; // path CV PDF
    link.download = "AdibNur_CV.pdf";
    link.click();
  };

  return (
    <div className="relative mt-36 md:mt-0 md:min-h-screen md:pt-10 md:px-0 text-center md:text-start  overflow-x-hidden bg-gradient-to-tr dark:from-transparent dark:via-darkOrange from-lightOrange via-lightWhite to-lightWhite dark:to-transparent">
      <h3 className="font-playfair font-bold text-center text-4xl">{t('aboutTitle')}</h3>
      <div className="md:flex">
        <div className="md:w-1/2">
          <img src="/img/about-img1.png" alt="ADIB NUR" className="grayscale hover:grayscale-0 transition md:w-[120%] w-1/2 mx-auto md:mx-0 " />
        </div>
        <div className=" md:w-1/2 md:px-14 flex flex-col justify-center items-center">
          <p className="font-roboto text-lg px-5  ">{t('aboutMessage')}
          </p>
          <div className="flex gap-5 my-10">
            <ButtonCTA onClick={handleContactClick}>{t("contactButton")}</ButtonCTA>
            <ButtonCTA onClick={handleDownloadCV}>{t("download")}</ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
