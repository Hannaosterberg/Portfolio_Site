"use client";
import { Codystar } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function Footer() {

    return (
        <footer className="w-full bg-black/5 backdrop-blur-md py-8 mt-20 border-t-1 border-gray-900">
            <div className="flex flex-col items-center gap-6">
            <h2 className={`${codystar.className} text-2xl text-white`}>Contact Me</h2>
            <div className="flex gap-8">
            <motion.a 
                whileHover={{ scale: 1.1, y: -2}}
                whileTap={{ scale: 0.95 }}
                href="mailto:hanna.osterberg@chasacademy.se"
                className="flex items-center gap-2 text-white hover:text-slate-400 transition-colors">
                <Image 
                    src="/mail-icon.svg"
                    alt="mail icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                    <span>Mail</span>
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.1, y: -2}}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/hanna-%C3%B6sterberg-4b963b203/"
                className="flex items-center gap-2 text-white hover:text-slate-400 transition-colors">
                <Image 
                    src="/linkedin_icon.svg"
                    alt="linkedin icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                <span>Linkedin</span>
            </motion.a>
            <div className="">
            <motion.a 
                whileHover={{ scale: 1.1, y: -2}}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Hannaosterberg"
                className="flex items-center gap-2 text-white hover:text-slate-400 transition-colors">
                <Image 
                    src="/GH-icon.svg"
                    alt="Github icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                    <span>Github</span>
            </motion.a>
            </div>
            </div>
            </div>
            <div className="flex justify-between m-5">
            <p className="text-white">© 2025 Hanna Österberg</p>
            <p className="text-white">Hope you've enjoyed my site!</p>
            </div>
        </footer>
    )
}

// TODO motion.div på länkar för att få som i techstack