import React, { useState, useEffect } from "react";
import ThemeToggle from "../../component/Button/ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguangeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { t } = useTranslation();

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 0; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: t("home"), id: "header" },
    { name: t("aboutMe"), id: "about-me" },
    { name: t("skills"), id: "skills" },
    { name: t("projects"), id: "projects" },
    { name: t("certificates"), id: "certificates" },
    { name: t("contact"), id: "contact" },
  ];

  return (
    <div
      className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 text-2xl fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={() => scrollToSection("header")} className="font-playfair text-xl sm:text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            ADIB NUR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8 text-base xl:text-lg">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Theme Toggle & Language Select */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <LanguageSwitcher position={"bottom"}/>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher/>

            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none" aria-label="Toggle menu">
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 top-3" : "top-1"}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 top-3" : "top-5"}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
          <nav className="flex flex-col gap-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2">
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
