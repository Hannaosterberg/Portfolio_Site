"use client";
import { motion } from "framer-motion";
import { Codystar } from "next/font/google";

export const revalidate = 3600;
const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const techStack = [
    { name: "React", src: "/tech-icons/react.svg"},
    { name: "CSS", src: "/tech-icons/css.svg"},
    { name: "Express", src: "/tech-icons/express.svg"},
    { name: "Figma", src: "/tech-icons/figma.svg"},
    { name: "Git", src: "/tech-icons/git.svg"},
    { name: "HTML", src: "/tech-icons/html.svg"},
    { name: "JavaScript", src: "/tech-icons/javascript.svg"},
    { name: "MongoDB", src: "/tech-icons/mongodb.svg"},
    { name: "MySQL", src: "/tech-icons/mysql.svg"},
    { name: "PostgreSQL", src: "/tech-icons/postgresql.svg"},
    { name: "Next.js", src: "/tech-icons/nextjs.svg"},
    { name: "Node.js", src: "/tech-icons/nodejs.svg"},
    { name: "Prisma", src: "/tech-icons/prisma.svg"},
    { name: "Redux", src: "/tech-icons/redux.svg"},
    { name: "Tailwind CSS", src: "/tech-icons/tailwind.svg"},
    { name: "TypeScript", src: "/tech-icons/typescript.svg"},
    { name: "Vue.js", src: "/tech-icons/vuejs.svg"}
];

export function TechStack() {
    return (
        <section id="techstack" className="min-h-screen flex flex-col items-center justify-center m-5">
            <div className="relative inset-0 bg-gray-900/30 backdrop-blur-sm rounded-xl"/>
            <div className="relative z-10 flex flex-col items-center">
                <motion.h2
                    className={`${codystar.className} text-5xl text-white mb-10`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                        Tech Stack
                </motion.h2>
                <motion.div
                    className="flex flex-wrap justify-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    >
                    {techStack.map((tech) => (
                        <motion.div
                            key={tech.name}
                            className="flex flex-col items-center gap-2"
                            variants={{ hidden: { opacity: 0, y: 20}, visible: { opacity: 1, y: 0 }}}
                            whileHover={{ scale: 1.1, rotate: 3}}
                            transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img src={tech.src} alt={tech.name} className="w-16 h-16 "/>
                                <p className="text-white text-sm">{tech.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 