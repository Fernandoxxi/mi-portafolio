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

// Lista de tecnologías con sus íconos
const techStack = [
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "Angular", src: "/icons/angular.svg" },
  { name: "Flutter", src: "/icons/flutter.svg" },
  { name: "Dart", src: "/icons/dart.svg" },
  { name: "MySQL", src: "/icons/mysql.svg" },
  { name: "MongoDB", src: "/icons/mongodb.svg" },
  { name: "HTML5", src: "/icons/html.svg" },
  { name: "CSS3", src: "/icons/css.svg" },
  { name: "Tailwind", src: "/icons/tailwind.svg" },
  { name: "GitHub", src: "/icons/github.svg" },
  { name: "VS Code", src: "/icons/vscode.svg" },
  { name: "Spring Tool Suite", src: "/icons/spring.svg" },
  { name: "Android Studio", src: "/icons/androidstudio.svg" },
];

export default function Hero() {
  return (
    <section
  className="relative min-h-screen flex items-center overflow-hidden
    bg-gradient-to-b from-gray-100 to-gray-200
    dark:from-slate-900 dark:to-slate-950"
  id="inicio"
>

      {/* fondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 py-20"
      >
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Fernando
            </span>{" "}
            <br />
            <span className="text-indigo-500 dark:text-indigo-400">
              Desarrollador Web
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg text-gray max-w-xl mx-auto md:mx-0"
          >
            Creo interfaces modernas, accesibles y con animaciones sutiles. Me encanta
            optimizar rendimiento y la experiencia de usuario.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex gap-4 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition transform hover:scale-105"
            >
              Ver proyectos
            </Link>

            <a
              href="/CV.pdf"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition transform hover:scale-105"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        {/* Imagen + órbita */}
        <motion.div variants={item} className="relative group">
          {/* Contenedor con órbita */}
          <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
            {/* Círculo orbitante */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {techStack.map((tech, i) => {
                  const angle = (i / techStack.length) * 2 * Math.PI;
                  const x = Math.round(Math.cos(angle) * 150 * 1000) / 1000;
                  const y = Math.round(Math.sin(angle) * 150 * 1000) / 1000;
                  return (
                    <Image
                      key={tech.name}
                      src={tech.src}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="absolute transition-transform duration-300 hover:scale-125"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Imagen central */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-2 ring-indigo-500/30 relative z-10">
              <Image
                src="/profile.png"
                alt="Fernando"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
