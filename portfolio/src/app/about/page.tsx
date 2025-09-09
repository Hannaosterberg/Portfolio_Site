import { Codystar } from "next/font/google";

const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function AboutPage() {

    return (
        <section className="">
            <div className="flex flex-col m-20 gap-5 text-center p-20">
                <h2 className={`${codystar.className} text-6xl text-white`}>About me</h2>
                <p className="text-white text-xl">Hi, my name is Hanna and I’m currently studying to become a Fullstack JavaScript Developer at Chas Academy in Stockholm.
                    <br></br>
                    <br></br>I’m an ambitious and creative person who is always eager to learn and grow. <br></br>I enjoy working in teams where I can share knowledge, support others, and contribute to a positive and collaborative atmosphere.
                    <br></br>
                    <br></br>My goal is to continue developing my skills in both frontend and backend development and to be part of projects that make a real difference for users.</p>
            </div>
        </section>
    )
}