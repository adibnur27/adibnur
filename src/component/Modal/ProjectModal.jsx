import React from "react";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null; // kalau belum ada data, jangan render modal

  // download file
  const handleDownloadFile = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath; // gunakan path file yang benar
    link.download = filePath.split("/").pop(); // ambil nama file dari path
    link.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-scroll">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full md:w-[90%] lg:w-11/12 md:p-6  p-2 relative">
        {/* Tombol close */}
        <button onClick={onClose} className="absolute top-0 right-2 text-gray-500 hover:text-red-500">
          ✕
        </button>
        {/* Konten detail */}
        <div className="flex justify-between">
          <div>
            <p className="md:mb-2 text-darkOrange dark:text-lightOrange">{t(project.projectType)}</p>
            <h3 className="lg:text-2xl text-lg font-bold md:mb-3">{t(project.title)}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-200 lg:mb-3">
              <span className="font-bold">Duration: </span> {t(project.duration)}
            </p>
            <p className="font-bold">Tools: </p>
            <p className="mb-14 lg:w-1/2">{t(project.tools)}</p>
            <p className="font-bold">description: </p>
          </div>
          <div>
            <img src={t(project.image)} alt={t(project.title)} className="w-full h-60 object-cover rounded-lg mb-4" />
            <a onClick={() => handleDownloadFile(project.file)} className="text-blue-500 underline cursor-pointer">
              {t(project.buttonDownload)}
            </a>
          </div>
        </div>

        <p className="lg:mb-3">{t(project.description)}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
