"use client";
import ProjectCard from "./ProjectCard";
import { Repo } from "../types/Repo";
import { motion } from "framer-motion";

interface ProjectListProps {
    repos: Repo[];
}

export default function ProjectList({ repos }: ProjectListProps) {
    if(repos.length === 0) return <p className="text-sm text-white">No Projects found...</p>;

    return (
        <motion.ul 
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2}}
            >
            {repos.map((repo) => (
                <motion.li
                key={repo.id}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0},
                }}>
                    <ProjectCard repo={repo}/>
                </motion.li>
            ))}
        </motion.ul>
    )
}