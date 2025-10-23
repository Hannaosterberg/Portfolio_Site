import { Codystar } from "next/font/google";
import Image from "next/image";

const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export function Intro() {
    return (
        <section className="flex flex-col m-10 gap-10 w-full h-full">
        <div className="flex flex-col gap-3 text-center">
        <h1 className={`${codystar.className} text-6xl text-white md:text-7xl lg:text-8xl`} >Hanna<br></br>Österberg</h1>
        <h2 className="text-3xl text-white">Fullstack Developer</h2>
        </div>
        <div className="flex justify-center">
            <Image src="/hanna1.jpg" alt="photo of me"
                width={384} height={384}
                className ="w-80 h-80 rounded-full border-1 opacity-90 lg:w-96 lg:h-96"/>
        </div>
        </section>
    )
}