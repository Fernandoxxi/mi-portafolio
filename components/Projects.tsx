"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const projects = [
  {
    title: "InnGenix – Sistema de Reservas Hoteleras",
    description:
      "Prototipo frontend académico para la gestión de reservas, reembolsos y panel administrativo. Diseño UI/UX con maquetación responsive.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/inngenix.png", 
    github: "https://github.com/Fernandoxxi/InnGenix",
    demo: "https://inngenix.netlify.app/public/hotel/caribbean/indexpublico.html",
    demo2: "https://inngenix.netlify.app/empresa/hotel/caribbean/login.html",
  },
  {
    title: "INCAPZ – App de Estimulación Cognitiva",
    description:
      "Aplicación móvil con 4 minijuegos (memoria, atención, lenguaje y motricidad). Incluye animaciones, timers y feedback. Orientado a niños.",
    stack: ["Flutter", "Dart"],
    image: "/projects/incapz.png",
    github: "https://github.com/Fernandoxxi/INCAPZ",
    app: "https://github.com/Fernandoxxi/INCAPZ/releases/download/appEducativa/incapz.apk"
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative min-h-screen flex items-center  bg-gradient-to-b from-gray-100 to-gray-200
    dark:from-slate-900 dark:to-slate-950"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        {/* Título */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Mis Proyectos
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 flex-1">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="mt-6 flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
                  >
                    GitHub
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                    >
                      Demo Cliente
                    </Link>
                  )}
                   {project.demo2 && (
                    <Link
                      href={project.demo2}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                    >
                      Demo Empresa
                    </Link>
                  )}
                  {project.app && (
                    <Link
                      href={project.app}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                    >
                      Descargar App Movil
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
