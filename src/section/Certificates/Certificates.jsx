import { Children, useState } from "react";
import { certificates } from "../../data/certificationsData";
import ButtonCTA from "../../component/Button/ButtonCTA";
import { useTranslation } from "react-i18next";

export default function Certificates() {
  const {t} = useTranslation();
  

  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="py-10 dark:bg-gradient-to-tl  bg-gradient-to-br  dark:from-transparent dark:via-darkOrange from-lightOrange via-lightWhite to-lightWhite dark:to-transparent">
      <h2 className="font-playfair font-bold text-center text-4xl">{t('titleCertificates')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto my-10 px-4">
        {displayedCerts.map((cert, i) => (
          <div key={i} className="p-5 dark:bg-lightWhite/10 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-500">{cert.provider}</p>
            <p className="text-xs text-gray-400">{cert.date}</p>
            <a href={cert.link} rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:underline">
              {cert.type === "link" ? "View Online" : "View PDF"}
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <ButtonCTA onClick={() => setShowAll(!showAll)} children={showAll ? t('buttonCertificates1') : t('buttonCertificates')}/> 
        {/* <button onClick={() => setShowAll(!showAll)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {showAll ? "Show Less" : "Show All"}
        </button> */}
      </div>
    </section>
  );
}
