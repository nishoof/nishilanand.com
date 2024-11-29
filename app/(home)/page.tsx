import ConnectIcons from "./components/ConnectIcons";
import Location from "@/app/(home)/components/Location";
import ProjectCard from "./components/ProjectCard";
import { featuredProjects } from "@/app/projects";

export default function Home() {
  return (
    <div className={"centeredDiv"}>
      <div style={{ margin: "2em 0" }}>
        <p style={{ color: "var(--color-light-1" }}><i>Site is currently in development...</i></p>
      </div>

      {/* Me */}
      <div style={{ margin: "2em 0", lineHeight: "normal" }}>
        <ConnectIcons />
        <h1 style={{ margin: "0.2em 0" }}>Nishil Anand</h1>
        <div style={{ margin: "0.3em 0" }}>
          <Location />
        </div>
        <p style={{ margin: "0.3em 0" }}>I&apos;m a student at the University of San Francisco majoring in Computer Science!</p>
      </div>

      {/* Featured Projects */}
      <div style={{ margin: "2em 0" }}>
        <h1>Featured Projects</h1>
        {
          featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.name}
              projectDesc={project.desc}
              backgroundImage={project.image}
              href={project.link}
            />
          ))
        }
      </div>
    </div>
  );
}