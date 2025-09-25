"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Dart", icon: "/icons/dart.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "HTML5", icon: "/icons/html.svg" },
  { name: "CSS3", icon: "/icons/css.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "Spring Tool Suite", icon: "/icons/spring.svg" },
  { name: "Android Studio", icon: "/icons/androidstudio.svg" },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="relative min-h-screen flex flex-col items-center  bg-gradient-to-b from-gray-100 to-gray-200
    dark:from-slate-900 dark:to-slate-950 py-20"
    >
      <motion.h2
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
      >
        Habilidades
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 max-w-6xl w-full px-4"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 relative mb-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg text-center font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}

        {/* Tarjeta de “aprendizaje continuo” */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:ring-2 hover:ring-green-400 transition-all cursor-pointer"
        >
          <div className="w-20 h-20 flex items-center justify-center mb-3 text-4xl text-gray-500 dark:text-gray-300">
            +
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg text-center font-medium">
            Próximamente más skills
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
