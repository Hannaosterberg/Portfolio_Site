import Link from "next/link";

export function Header() {
    return (
        <header className="py-4 px-6 shadow-md sticky top-0 z-50 rounded-t-xl">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-xl text-white font-bold" >My Portfolio</Link>
                <ul className="flex space-x-6 text-black">
                    <li className="hover:font-bold text-white"><Link href="/">Home</Link></li>
                    <li className="hover:font-bold text-white"><Link href="/about">About Me</Link></li>
                    <li className="hover:font-bold text-white"><Link href="/projects">My Projects</Link></li>
                    <li className="hover:font-bold text-white"><Link href="/contact">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}