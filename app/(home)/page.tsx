import style from "./style.module.css";
import ConnectIcons from "./components/ConnectIcons";
import Location from '@/app/(home)/components/Location';
import ProjectCard from "./components/ProjectCard";
import { featuredProjects } from "@/app/projects";

export default function Home() {
    return (
        <div className={'centeredDiv'}>
            <p><i>Site is currently in development...</i></p>

            {/* Me */}
            <div style={{ marginBottom: 20 }}>
                <ConnectIcons />
                <h1 className={style.me}>Nishil Anand</h1>
                <Location />
                <p className={style.me}>I&apos;m a student at the University of San Francisco majoring in Computer Science!</p>
            </div>

            {/* Featured Projects */}
            <div>
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