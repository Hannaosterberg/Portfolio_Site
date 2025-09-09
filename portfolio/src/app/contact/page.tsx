import { Codystar } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function Footer() {

    return (
        <footer className="w-full bg-black/5 backdrop-blur-md py-8 mt-20 border-t-1 border-gray-900">
            <div className="flex flex-col items-center gap-4">
            <h2 className={`${codystar.className} text-2xl text-white`}>Contact Me</h2>
            <div className="flex gap-6">
            <a href="mailto:hanna.osterberg@chasacademy.se"
                className="text-white hover:text-slate-400">
                <Image 
                    src="/mail-icon.svg"
                    alt="mail icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                    Mail
            </a>
            <a href="https://www.linkedin.com/in/hanna-%C3%B6sterberg-4b963b203/"
                className="text-white hover:text-slate-400">
                <Image 
                    src="/linkedin_icon.svg"
                    alt="linkedin icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                Linkedin
            </a>
            <div className="">
            <a href="https://github.com/Hannaosterberg"
                className="text-white hover:text-slate-300 hover:">
                <Image 
                    src="/GH-icon.svg"
                    alt="Github icon"
                    width={30}
                    height={30}
                    className="invert hover:text-slate-400"
                    />
                    Github
            </a>
            </div>
            </div>
            </div>
            <div className="flex justify-between m-3">
            <p className="text-white">© 2025 Hanna Österberg</p>
            <p className="text-white">Hope you've enjoyed my site!</p>
            </div>
        </footer>
    )
}