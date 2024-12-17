"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./ui/GradientBg";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || "",
        {
          from_name: form.name,
          to_name: "Hugo",
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_MY_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Votre message a été envoyé avec succès !");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue, réessayer plus tard !");
      setLoading(false);
    }
  };

  return (
    <section className="c-space mb-20" id="contact">
      <div className="relative min-h-fit md:min-h-screen flex items-center md:justify-center flex-col rounded-3xl pb-8 md:pb-0">
        <img
          src="/terminaltest.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen md:block hidden"
        />
        <div className="md:hidden">
          <BackgroundGradientAnimation />
        </div>
        <div className="contact-container">
          <h3 className="heading py-6">
            Faisons <span className="text-purple">équipe !</span>
          </h3>
          <p className="text-lg">
            Que vous cherchiez à construire un nouveau site web, à améliorer
            votre plateforme existante ou à donner vie à un projet unique, je
            suis là pour vous aider !
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nom</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder=".........."
              />
            </label>

            <button
              className="md:pb-6 w-60 self-center"
              type="submit"
              disabled={loading}
            >
              <MagicButton
                title={loading ? "Envoie..." : "Envoyer votre message"}
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
