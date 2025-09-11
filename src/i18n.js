// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          home: "Home",
          aboutMe: "About Me",
          skills: "Skills",
          projects: "Projects",
          certificates: "Certificates",
          contact: "Contact",

          // Header
          greeting: "Hi, I'm",
          name: "ADIB NUR",
          role: "Front-End Developer",
          desc: "Focused on creating web solutions that combine design and technology.",
          contactButton: "Let's Contact Me",
          download: "Download My CV",

          // About
          aboutTitle: "About Me",
          aboutMessage:
            "Hi, I'm a Front-End Developer who loves turning ideas into clean and responsive web applications. I have worked on various projects, often collaborating within Agile/Scrum teams. I enjoy teamwork, adapt quickly, and solve problems with creative solutions. Through these projects, I’ve grown not only in coding skills but also in communication, collaboration, and delivering real value to users.",

          // Skills
          titleSkills: "Skills",
          titleTools: "Tools & Workflow",

          // projects page
          titleProject: "Projects",

          // Projects Data 1
          projectType1: "Company Profile",
          titleProject1: "Wong Ryant Tour & Travel",
          descriptionProject1:
            "This project is the development of an elegant and modern company profile website for 'Wong Ryant Tour & Travel', a travel agency. The site was built as a Single-Page Application (SPA) to provide smooth and fast navigation without reloads. Key features include company information pages, services, top destinations, and customer testimonials. The project uses Framer Motion for modern animations, Swiper.js for interactive sliders, and Tailwind CSS for responsive design. A Dark Mode option was also added to improve user comfort. Navigation was structured using React Router DOM for a seamless browsing experience.",
          toolsProject1: "React, React Router DOM, Tailwind CSS, React Icons, Framer Motion, Swiper.js",
          durationProject1: "2 weeks",
          buttonProject1: "See More",
          buttonDownload1: "Download File",
          imageProject1: "/projects/wongRyantTour.png",

          // Projects Data 2
          projectType2: "Workshop Data Management App",
          titleProject2: "Gunadarma University - Multimedia & Robotics Center",
          descriptionProject2:
            "This project is a web application for managing and exporting workshop data. It converts JSON data into structured Excel spreadsheets (.xlsx) using the XLSX (SheetJS) library. The app was built with React and styled with Tailwind CSS, including custom themes, fonts, and animations (spin-slow, pulse-slow) for a modern and interactive interface. Supabase was also integrated for backend data management.",
          durationProject2: "2 weeks",
          toolsProject2: "React, Tailwind CSS, XLSX (SheetJS), Supabase",
          buttonProject2: "See More",
          buttonDownload2: "Download File",
          imageProject2: "/projects/ug-muro.png",

          // Projects Data 3
          projectType3: "Interactive CBT Web App",
          titleProject3: "TE-KOR (Korean Try Out)",
          descriptionProject3:
            "This project is a Computer-Based Test (CBT) platform designed to provide users with an interactive and modern testing experience. Built as a SPA using React and Vite, it includes secure authentication with JWT, user session management, and access to multiple tryout packages. Redux Toolkit was used for efficient state management, while Axios handled API requests. The UI was built with Tailwind CSS and enhanced with Framer Motion and React Hot Toast for dynamic interactions and feedback. This project showcases my ability to build full-stack web applications with structured code, advanced state management, and a strong focus on user experience.",
          durationProject3: "2 weeks",
          toolsProject3: "React, React Router DOM, Redux Toolkit, React-Redux, Tailwind CSS, React Icons, Framer Motion, Axios, JWT Decode, Yup & @hookform/resolvers, SweetAlert2",
          buttonProject3: "See More",
          buttonDownload3: "Download File",
          imageProject3: "/projects/tekor-project.png",

          // Certificates Page
          titleCertificates: "Certificates",
          buttonCertificates: "Show All",
          buttonCertificates1: "Show Less",

          // Contact Page
          titleContact: "Let’s Build Something Amazing Together",
          SubTitleContact: "I am always open to new opportunities, collaborations, or just casual conversations. Send me a message using the form below.",

          inputName: "Name",
          inputSubject: "Subject",
          inputMessage: "Message",
          inputButton: "Sending...",
          inputButton1: "Send Message",

          // Validation
          titleWarning: "Oops...",
          textWarning: "All fields are required!",
          titleSuccess: "Success!",
          textSuccess: "Message sent successfully",
          titleError: "Failed!",
          textError: "Message failed to send. Please try again later.",
        },
      },
      id: {
        translation: {
          // Navbar
          home: "Beranda",
          aboutMe: "Tentang Saya",
          skills: "Keahlian",
          projects: "Proyek",
          certificates: "Sertifikat",
          contact: "Kontak",

          // Header
          greeting: "Halo, saya",
          name: "ADIB NUR",
          role: "Front-End Developer",
          desc: "Fokus pada pembuatan solusi web yang menggabungkan desain dan teknologi.",
          contactButton: "Hubungi Saya",
          download: "Unduh CV Saya",

          // About
          aboutTitle: "Tentang Saya",
          aboutMessage:
            "Halo, saya seorang Front-End Developer yang senang mengubah ide menjadi aplikasi web yang bersih dan responsif. Saya telah mengerjakan berbagai proyek dan terbiasa bekerja dalam tim dengan metodologi Agile/Scrum. Saya menikmati kolaborasi, cepat beradaptasi, dan menyelesaikan masalah dengan solusi kreatif. Dari pengalaman proyek tersebut, saya berkembang tidak hanya dalam keterampilan pemrograman, tetapi juga dalam komunikasi, kerja sama tim, dan memberikan nilai nyata bagi pengguna.",

          // Skills
          titleSkills: "Keterampilan",
          titleTools: "Alat & Alur Kerja",

          // projects page
          titleProject: "Proyek",

          // Projects Data 1
          projectType1: "Profil Perusahaan",
          titleProject1: "Wong Ryant Tour & Travel",
          descriptionProject1:
            "Proyek ini adalah pembuatan website company profile yang elegan dan modern untuk 'Wong Ryant Tour & Travel', sebuah agen perjalanan. Website ini dirancang sebagai Single-Page Application (SPA) agar navigasi lebih cepat dan mulus tanpa perlu reload. Fitur utama mencakup halaman informasi perusahaan, layanan, destinasi unggulan, serta testimoni pelanggan. Proyek ini menggunakan Framer Motion untuk animasi modern, Swiper.js untuk slider interaktif, dan Tailwind CSS untuk desain responsif. Website juga dilengkapi dengan Dark Mode guna meningkatkan kenyamanan pengguna. Navigasi diatur dengan React Router DOM sehingga pengguna mudah menjelajahi seluruh konten.",
          toolsProject1: "React, React Router DOM, Tailwind CSS, React Icons, Framer Motion, Swiper.js",
          durationProject1: "2 minggu",
          buttonProject1: "Lihat Selengkapnya",
          buttonDownload1: "Unduh File",
          imageProject1: "/projects/wongRyantTour.png",

          // Projects Data 2
          projectType2: "Aplikasi Manajemen Data Workshop",
          titleProject2: "Universitas Gunadarma - Pusat Studi Multimedia dan Robotika",
          descriptionProject2:
            "Proyek ini adalah aplikasi web untuk mengelola dan mengekspor data workshop. Aplikasi ini mengubah data JSON menjadi file spreadsheet Excel (.xlsx) menggunakan library XLSX (SheetJS). Dibangun dengan React dan Tailwind CSS, antarmuka dirancang modern dan interaktif dengan kustomisasi tema, font, serta animasi (spin-slow, pulse-slow). Supabase juga diintegrasikan sebagai backend untuk manajemen data.",
          durationProject2: "2 minggu",
          toolsProject2: "React, Tailwind CSS, XLSX (SheetJS), Supabase",
          buttonProject2: "Lihat Selengkapnya",
          buttonDownload2: "Unduh File",
          imageProject2: "/projects/ug-muro.png",

          // Projects Data 3
          projectType3: "Aplikasi CBT Interaktif",
          titleProject3: "TE-KOR (Korean Try Out)",
          descriptionProject3:
            "Proyek ini adalah platform Computer-Based Test (CBT) yang dirancang untuk memberikan pengalaman ujian modern dan interaktif. Dibangun sebagai SPA dengan React dan Vite, aplikasi ini mendukung autentikasi aman menggunakan JWT, manajemen sesi pengguna, serta akses ke berbagai paket tryout. Redux Toolkit digunakan untuk manajemen state yang efisien, sedangkan Axios mengatur komunikasi API. Antarmuka dibuat dengan Tailwind CSS, diperkaya dengan Framer Motion dan React Hot Toast untuk interaksi dinamis dan notifikasi. Proyek ini menunjukkan kemampuan membangun aplikasi web full-stack dengan arsitektur terstruktur, manajemen state canggih, dan fokus pada pengalaman pengguna.",
          durationProject3: "2 minggu",
          toolsProject3: "React, React Router DOM, Redux Toolkit, React-Redux, Tailwind CSS, React Icons, Framer Motion, Axios, JWT Decode, Yup & @hookform/resolvers, SweetAlert2",
          buttonProject3: "Lihat Selengkapnya",
          buttonDownload3: "Unduh File",
          imageProject3: "/projects/tekor-project.png",

          // Certificates Page
          titleCertificates: "Certificates",
          buttonCertificates: "Tampilkan Semua",
          buttonCertificates1: "Tampilkan Lebih Sedikit",

          // Contact Page
          titleContact: "Mari kita bangun sesuatu yang luar biasa bersama-sama!",
          SubTitleContact: "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekedar obrolan santai. Kirimkan pesanmu melalui form di bawah ini.",

          inputName: "Nama",
          inputSubject: "Subjek",
          inputMessage: "Pesan",

          inputButton: "Mengirim...",
          inputButton1: "Kirim Pesan",

          // validation
          titleWarning: "Oops...",
          textWarning: "Semua field wajib diisi!",
          titleSuccess: "Berhasil!",
          textSuccess: "Pesan berhasil dikirim",
          titleError: "Gagal!",
          textError: "Pesan gagal dikirim. Coba lagi nanti.",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
