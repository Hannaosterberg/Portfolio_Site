import { Repo } from "../types/Repo"
import Image from "next/image"

interface RepoProps {
    repo: Repo
}

export default function ProjectCard({ repo }: RepoProps ) {
    return (
        <li className="rounded-2xl border p-4 hover:shadow-md transition flex flex-col gap-2">
            <Image 
                src={repo.image ?? "/projectImages/default.jpg"}
                alt={repo.name}
                width={300}
                height={200}
                className="rounded-md"/>
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="">{repo.description}</p>
            <p className="">{repo.language}</p>
            <div className="flex gap-10">
            <p className="font-light">{}</p>
            <a href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium underline-offset-4 hover:underline">
                View on Github
            </a>
            </div>
        </li>
    )
}