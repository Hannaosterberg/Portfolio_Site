import { Link, useLocation } from "react-router-dom";
import Introduktion from "./Introduktion"
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const linkStyle = (path: string) =>
        location.pathname === path
        ? "text-pink-800 font-semibold"
        : "text-pink-500";
    
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className={linkStyle("/")}>Home</Link>
                    <Link to="/about" className={linkStyle("/about")}>About me</Link>
                    <Link to="/projects" className={linkStyle("/projects")}>My projects</Link>
                    <Link to="/contact" className={linkStyle("/contact")}>Contact me</Link>
                </nav>
                <button className="md:hidden"
                    onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/" onClick={closeMenu} className={linkStyle("/")}>Home</Link>
                    <Link to="/about" onClick={closeMenu} className={linkStyle("/about")}>About me</Link>
                    <Link to="/projects" onClick={closeMenu} className={linkStyle("/projects")}>My Projects</Link>
                    <Link to="/contact" onClick={closeMenu} className={linkStyle("/contact")}>Contact me</Link>
                </nav>
            )}
            <Introduktion />
        </header>
    )
}