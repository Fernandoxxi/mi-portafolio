"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-b from-gray-100 to-gray-200
      dark:from-slate-900 dark:to-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl top-[10%] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-[5%] right-[-150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Imagen */}
        <motion.div variants={item} className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl ring-2 ring-indigo-500/30">
            <Image
              src="/profile.png"
              alt="Fernando"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div variants={item} className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Sobre mí
          </h2>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            Soy técnico en{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              Computación e Informática (Cibertec)
            </span>{" "}
            con formación en programación, bases de datos, microservicios y
            gestión de proyectos y servicios de TI. Me apasiona crear{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              aplicaciones funcionales con interfaces modernas
            </span>{" "}
            y continuar aprendiendo nuevas tecnologías.
          </p>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            He desarrollado proyectos académicos y personales donde apliqué mis
            conocimientos en{" "}
            <span className="text-indigo-600 dark:text-indigo-400">frontend</span>{" "}
            y{" "}
            <span className="text-indigo-600 dark:text-indigo-400">desarrollo móvil</span>,
            trabajando con tecnologías como{" "}
            <span className="text-purple-600 dark:text-purple-400">
              HTML, CSS, JavaScript, Flutter y Dart
            </span>.
          </p>

          {/* Datos destacados */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-200 dark:bg-slate-800/50 backdrop-blur border border-slate-300 dark:border-slate-700/50">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">2</p>
              <p className="text-gray-800 dark:text-gray-300">Proyectos principales</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-200 dark:bg-slate-800/50 backdrop-blur border border-slate-300 dark:border-slate-700/50">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">+5</p>
              <p className="text-gray-800 dark:text-gray-300">Cursos técnicos</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
