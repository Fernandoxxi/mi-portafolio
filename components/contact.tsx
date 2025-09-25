"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaTag
} from "react-icons/fa";

// Configuración de EmailJS - REEMPLAZA CON TUS CLAVES REALES
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xk961fe',
  TEMPLATE_ID: 'template_6ljzgfy',
  PUBLIC_KEY: 'Q07qukCV5oVqRnut5'
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    } 
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

const cardHover: Variants = {
  hover: { 
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconHover: Variants = {
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.2 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, completa los campos obligatorios (*)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, ingresa un email válido");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Mensaje desde portfolio",
          message: formData.message,
          date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result);
      
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 4000);
      
    } catch (error) {
      console.error('Error enviando email:', error);
      setError("❌ Error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "manriquefernando2104@gmail.com",
      link: "mailto:manriquefernando2104@gmail.com",
      color: "hover:text-blue-500"
    },
    {
      icon: FaPhoneAlt,
      label: "Teléfono",
      value: "+51 921 774 122",
      link: "tel:+51921774122",
      color: "hover:text-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Ubicación",
      value: "Ventanilla - Callao, Perú",
      color: "hover:text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/Fernandoxxi",
      color: "hover:text-gray-700 dark:hover:text-white"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/fernandoxmanrique",
      color: "hover:text-blue-600"
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/_fernandox_2006/",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section
      id="contacto"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-b from-gray-100 to-gray-200
      dark:from-slate-900 dark:to-slate-950
      py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Fondo decorativo - Similar al About pero con colores diferentes */}
      <div className="absolute inset-0 -z-10">
        {/* Formas similares al About pero con colores azules */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[10%] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl bottom-[5%] right-[-150px]" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
          </p>
        </motion.div>

        {/* Contenido principal - Grid responsive mejorado */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* Formulario - Mejorado para móvil */}
          <motion.div variants={item} className="w-full">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700 relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl pointer-events-none"></div>
              
              <div className="relative space-y-4 sm:space-y-6">
                {[
                  { name: "name", label: "Nombre", icon: FaUser, required: true },
                  { name: "email", label: "Correo Electrónico", icon: FaEnvelope, required: true },
                  { name: "subject", label: "Asunto", icon: FaTag, required: false }
                ].map((field, idx) => (
                  <div key={idx} className="relative group">
                    <field.icon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10 text-sm sm:text-base" />
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50/70 dark:bg-slate-700/70 border border-gray-200 dark:border-slate-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 text-sm sm:text-base"
                      placeholder={`${field.label}${field.required ? ' *' : ''}`}
                    />
                  </div>
                ))}

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-50/70 dark:bg-slate-700/70 border border-gray-200 dark:border-slate-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 text-sm sm:text-base"
                    placeholder="Tu mensaje *"
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-3 text-red-700 dark:text-red-300 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-3 text-green-700 dark:text-green-300 text-sm text-center"
                  >
                    ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 sm:py-4 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs sm:text-sm" />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

          {/* Información de contacto - Mejorada para móvil */}
          <motion.div variants={item} className="space-y-4 sm:space-y-6">
            {/* Tarjeta de información */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link ? "_blank" : undefined}
                    rel={info.link ? "noopener noreferrer" : undefined}
                    variants={iconHover}
                    whileHover="hover"
                    className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl transition-all duration-300 group cursor-pointer ${
                      info.link ? "hover:bg-blue-50/50 dark:hover:bg-slate-700/50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      <info.icon className={`text-blue-600 dark:text-blue-400 ${info.color} transition-colors text-sm sm:text-base`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{info.label}</p>
                      <p className={`text-gray-600 dark:text-gray-300 ${info.color} transition-colors text-xs sm:text-sm truncate`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Sígueme en Redes
              </h3>
              
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconHover}
                    whileHover="hover"
                    className="flex flex-col items-center gap-1 sm:gap-2 group"
                    aria-label={social.label}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <social.icon className={`text-lg sm:text-2xl text-gray-600 dark:text-gray-300 ${social.color} transition-colors`} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Nota adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-gray-500 dark:text-gray-400 italic text-xs sm:text-sm mt-2"
            >
              <p>✨ Siempre abierto a nuevos proyectos y oportunidades de colaboración</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}