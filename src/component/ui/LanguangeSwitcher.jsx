import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag"; // <-- 1. Import library

const languages = [
  { code: "en", lang: "EN", country_code: "GB" }, // Gunakan huruf besar untuk kode negara
  { code: "id", lang: "ID", country_code: "ID" },
];

const LanguageSwitcher = ({ position = "auto" }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");
  const buttonRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lng) => lng.code === i18n.language) || languages[0];

  useEffect(() => {
    // ... (logika useEffect tetap sama, tidak perlu diubah)
    if (position === "auto" && isOpen && buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const spaceBelow = windowHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;

        if (spaceBelow < 200 && spaceAbove > spaceBelow) {
            setDropdownPosition("top");
        } else {
            setDropdownPosition("bottom");
        }
    } else if (position !== "auto") {
        setDropdownPosition(position);
    }
  }, [isOpen, position]);

  const getDropdownClasses = () => {
    const baseClasses = "absolute left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50";
    return dropdownPosition === "top" ? `${baseClasses} bottom-full mb-1` : `${baseClasses} top-full`;
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md py-1 px-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 min-w-[70px] justify-between"
      >
        {/* === 2. Gunakan komponen bendera === */}
        <div className="flex items-center gap-2">
            <ReactCountryFlag countryCode={currentLanguage.country_code} svg style={{ width: '1.25em', height: '1.25em' }} />
            <span>{currentLanguage.lang}</span>
        </div>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className={getDropdownClasses()}>
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-md last:rounded-b-md ${
                i18n.language === lng.code ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {/* === 3. Gunakan juga di sini === */}
              <ReactCountryFlag countryCode={lng.country_code} svg style={{ width: '1.25em', height: '1.25em' }} />
              <span className="font-medium">{lng.lang}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default LanguageSwitcher;