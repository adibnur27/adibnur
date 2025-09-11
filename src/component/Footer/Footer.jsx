import React from "react";
import ContactIcon from "../ContactIcon/ContactIcon";
import ThemeToggle from "../../component/Button/ThemeToggle";
import LanguangeSwitcher from "../../component/ui/LanguangeSwitcher";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation();


  // 🔹 fungsi smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // sesuaikan tinggi navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:py-0 py-5 flex md:justify-evenly justify-center items-center bg-gray-300 dark:bg-gray-800">
      {/* Kiri */}
      <div className="w-1/2 justify-between items-center md:flex hidden">
        <div className="w-1/2 box-border">
          <img src="/img/about-img1.png" alt="" className="w-52 h-auto object-cover mx-auto" />
        </div>

        <div className="w-1/2 space-y-2">
          <h3 className="font-bold font-roboto lg:text-3xl md:text-2xl text-center ">ADIB NUR</h3>
          <p className="font-playfair lg:text-3xl md:text-xl text-center">Front-End Developer</p>
          <p className="font-roboto text-center md:text-sm lg:text-base">{t("desc")}</p>
        </div>
      </div>

      {/* Kanan */}
      <div className="w-[45%] ">
        <div className="md:flex justify-around items-center space-y-5">
          <div>
            <div className="font-roboto text-center flex gap-10">
              {/* Kolom 1 */}
              <div className=" font-bold text-roboto">
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => scrollToSection("header")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('home')}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("about-me")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('aboutMe')}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("skills")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('skills')}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Kolom 2 */}
              <div className="space-y-3 font-bold text-roboto">
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('projects')}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("certificates")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('certificates')}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {t('contact')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact + Toggle */}
          <div className="space-y-2">
            <h6 className="font-bold text-roboto text-center">{t('contact')}</h6>
            <ContactIcon />
            <div className="flex justify-center items-center gap-5 pt-5 ">
              <ThemeToggle />
              <LanguangeSwitcher position="top" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
