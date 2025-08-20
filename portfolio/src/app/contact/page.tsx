import { Codystar } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function ContactPage() {

    return (
        <section className="">
            <div className="flex flex-col m-20 gap-15">
            <h2 className={`${codystar.className} text-5xl text-white text-center md:text-7xl`}>Contact Information</h2>
            <div className="flex flex-col gap-3 items-center md:text-2xl">
            <div className="flex gap-6">
            <a href="mailto:hanna.osterberg@chasacademy.se">
                <Image 
                    src="mail-icon.svg"
                    alt="mail icon"
                    width={30}
                    height={30}
                    className="invert"
                    />
            </a>
            <Link href="https://www.linkedin.com/in/hanna-%C3%B6sterberg-4b963b203/">
                <Image 
                    src="linkedin_icon.svg"
                    alt="linkedin icon"
                    width={30}
                    height={30}
                    className="invert"
                    />
            </Link>
            <Link href="https://github.com/Hannaosterberg">
                <Image 
                    src="GH-icon.svg"
                    alt="Github icon"
                    width={30}
                    height={30}
                    className="invert"
                    />
            </Link>
            </div>
            </div>
            </div>
        </section>
    )
}