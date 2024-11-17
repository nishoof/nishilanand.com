import ProjectCard from "./ProjectCard";
import elevatorImg from "@/public/images/projectCards/elevator.png"

export default function FeaturedProjects() {
    const projects = [
        { name: "elevator", link: "https://github.com/nishoof/elevator", image: `url(${elevatorImg.src})` }
    ]

    return (
        <div>
            <h1>Featured Projects</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: 20 }}>
                <ProjectCard backgroundImage={projects[0].image} href={projects[0].link} />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
            </div>
        </div>
    );
}