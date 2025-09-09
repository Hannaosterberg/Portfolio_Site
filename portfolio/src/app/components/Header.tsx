import Link from "next/link";

export function Header() {
    return (
        <header className="py-4 px-6 shadow-md sticky top-0 z-50 rounded-t-xl bg-black/10 backdrop-blur-md">
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