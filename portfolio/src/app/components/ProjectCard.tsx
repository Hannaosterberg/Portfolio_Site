import { Repo } from "../types/Repo"
import Image from "next/image"

interface RepoProps {
    repo: Repo
}

export default function ProjectCard({ repo }: RepoProps ) {
    return (
        <div className="rounded-2xl border-white border-2 p-5 hover:shadow-md transition flex flex-col gap-2 w-100 justify-self-center">
            <Image 
                src={repo.image ?? "/projectImages/default.jpg"}
                alt={repo.name}
                width={400}
                height={200}
                className="rounded-md self-center"/>
            <h3 className="text-xl font-bold text-white">{repo.name}</h3>
            <p className="text-white">{repo.description}</p>
            <p className="text-white">{repo.language}</p>
            <div className="flex gap-10">
            {/* <p className="font-light text-white">{}</p> */}
            <div className="flex items-center gap-3">
            <Image 
                    src="/GH-icon.svg"
                    alt="Github icon"
                    width={30}
                    height={30}
                    className="invert" />
            <a href={repo.html_url}
                className="text-md font-medium underline-offset-4 hover:underline hover:text-slate-400 text-white">
                View on Github
            </a>
            </div>
            </div>
        </div>
    )
}