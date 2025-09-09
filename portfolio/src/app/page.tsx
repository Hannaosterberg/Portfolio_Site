import { Intro } from "./components/Intro-H";
import AboutPage from "./about/page";
import ProjectList from "./components/ProjectList";
import ContactPage from "./contact/page";
import { Repo } from "./types/Repo";
import { Codystar } from "next/font/google";
import { repoImages } from "./components/lib/repoImages";
import { FadeInWhenVisible } from "./components/FadeInWhenVisible";

export const revalidate = 3600;
const codystar = Codystar({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

async function getRepos(): Promise<Repo[]> {
  const userName = process.env.GITHUB_USERNAME;
  if(!userName) throw new Error("GITHUB_USERNAME not set");

  const res = await fetch(`https://api.github.com/users/${userName}/repos`, {
    headers: { "Accept": "application/vnd.github.v3+json"},
  });

  if(!res.ok) throw new Error("Failed to fetch repos");
  
  const data = await res.json();
  const allowedRepos = ["Portfolio_Site", "The-Players-Academy", "TodoList-ts", "Quizzy", "Webbshop", "Memory-Game", "Rock-Paper-Scissor", "u02-Portfolio-Site"]

  return data
    .filter((r: any) => allowedRepos.includes(r.name))
    .map((r: any) => ({
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      language: r.language,
      image: repoImages[r.name] ?? "/projectImages/default.jpg"
  }));
}

export default async function Home() {
  const repos = await getRepos();
  return (
    <main className="flex flex-col">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Intro />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center">
        <FadeInWhenVisible>
          <AboutPage />
        </FadeInWhenVisible>
      </section>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10">
        <FadeInWhenVisible>
          <h2 className={`${codystar.className} text-5xl text-white mb-10`}>My Projects</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <ProjectList repos={repos} />
        </FadeInWhenVisible>
      </section>
      <section id="contact" className="">
        <FadeInWhenVisible>
          <ContactPage />
        </FadeInWhenVisible>
      </section>
    </main>
  );
}
