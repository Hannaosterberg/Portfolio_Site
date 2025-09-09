import { Repo } from "../types/Repo";
import ProjectList from "../components/ProjectList";
import { Codystar } from "next/font/google";

export const revalidate = 3600;
const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default async function ProjectsPage() {

    return (
        <section className="">
            <div className="flex flex-col gap-15 m-20 justify-self-center">
            <h1 className={`${codystar.className} text-6xl text-white md:text-7xl`}>My Projects</h1>
            
            </div>
        </section>
    )
}