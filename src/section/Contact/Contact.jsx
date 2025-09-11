import React, { useRef, useState } from "react";
import { sendForm } from "emailjs-com";
import Input from "../../component/Input/Input"; 
import ButtonCTA from "../../component/Button/ButtonCTA";
import Swal from "sweetalert2"; // 🔹 import Swal
import { useTranslation } from "react-i18next";

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const {t} = useTranslation();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    // 🔹 ambil value manual buat validasi
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: t('titleWarning'),
        text: t('textWarning'),
      });
      return;
    }

    setLoading(true);
    try {
      await sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      Swal.fire({
        icon: "success",
        title: t('titleSuccess'),
        text: t('textSuccess'),
      });
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      Swal.fire({
        icon: "error",
        title: t('titleError'),
        text: t('textError'),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-10"
      id="contact"
    >
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-4">
        {t('titleContact')}
      </h2>
      <p className="font-roboto text-center mb-8 text-sm md:text-base max-w-xl">
        {t('SubTitleContact')}
      </p>

      <div className="max-w-xl w-full mx-auto px-6">
        <div className="rounded-xl border-2 border-darkBlack dark:border-lightWhite bg-lightWhite p-5 ">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input label={t('inputName')} name="name" placeholder="Nama lengkap"  />
            <Input label="Email" type="email" name="email" placeholder="email@domain.com"  />
            <Input label={t('inputSubject')} name="subject" placeholder="Mis. Project Collaboration" />
            <Input label={t('inputMessage')} name="message" placeholder="Tulis pesanmu..."  />

            <div className="flex gap-3 mt-4 mx-auto">
              <ButtonCTA
                children={loading ? t('inputButton') : t('inputButton1')}
                disabled={loading}
              />
              <button
                type="reset"
                onClick={() => {
                  form.current && form.current.reset();
                }}
                className="font-roboto px-2 py-1 dark:text-darkBlack border-2 rounded-lg hover:bg-lightOrange hover:text-lightWhite dark:hover:text-lightWhite border-lightOrange"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
