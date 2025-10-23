"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.7);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <header 
            className={`py-4 px-6 shadow-md sticky top-0 z-50 transition-colors duration-300 
            ${scrolled ? "bg-black/10 backdrop-blur-md" : "bg-transparent"}`}>
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <Link href="#hero" className="text-xl text-white font-bold" >My Portfolio</Link>
                <ul className="flex space-x-6">
                    <li className="hover:font-bold text-white"><a href="#hero">Home</a></li>
                    <li className="hover:font-bold text-white"><a href="#about">About Me</a></li>
                    <li className="hover:font-bold text-white"><a href="#projects">My Projects</a></li>
                    <li className="hover:font-bold text-white"><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    )
}