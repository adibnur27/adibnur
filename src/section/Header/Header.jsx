import React from "react";
import { useTranslation } from "react-i18next";
import ButtonCTA from "../../component/Button/ButtonCTA";
import ContactIcon from "../../component/ContactIcon/ContactIcon";

const Header = () => {
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
    <div className="  border-black">
      <div className=" border-red-500 flex flex-col md:flex-row gap-10 md:gap-0 md:pt-0 pt-20 text-center lg:text-start items-center max-h-screen border-box md:px-10">
        <div className="w-full space-y-4 lg:ms-5 order-2 md:order-1">
          <p className="font-playfair md:text-2xl  text-4xl xl:text-4xl">
            {t("greeting")} <span className="font-roboto">{t("name")}</span>
          </p>
          <p className="font-playfair lg:text-6xl md:text-4xl text-5xl xl:text-6xl">{t("role")}</p>
          <p className="font-roboto text-xl w-2/3 lg:mx-0 mx-auto xl:text-2xl">{t("desc")}</p>
          <div className="flex md:gap-5 lg:justify-start justify-center gap-2">
            <ButtonCTA onClick={handleContactClick}>{t("contactButton")}</ButtonCTA>
            <ButtonCTA onClick={handleDownloadCV}>{t("download")}</ButtonCTA>
          </div>
          <div className="relative left-40 text-center md:static">
            <ContactIcon />
          </div>
        </div>
        <div className="w-full md:flex px-10 md:px-0 order-1 md:order-2 items-end justify-center bg-gradient-to-r from-lightWhite via-lightOrange to-lightWhite dark:from-transparent dark:via-darkOrange dark:to-trafrom-transparent md:min-h-screen border-box md:mb-0 transition-colors duration-1000">
          <img src="/img/header-img.png" alt="ADIB NUR" className="xl:w-[55%] w-40 lg:w-[55%] md:w-[80%] md:h-auto md:object-contain md:mx-0 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
