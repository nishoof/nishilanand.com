import ProjectCard from "./ProjectCard";
// import elevatorImg from "@/public/images/projectCards/elevator.png"

export default function FeaturedProjects() {
    const projects = [
        {
            name: "Elevator Simulator",
            desc: "A game where you multitask to manage multiple elevators to deliver people to their floors on time",
            link: "https://github.com/nishoof/elevator",
            image: '/images/projectCards/elevator.png'
        }
    ]

    return (
        <div>
            <h1>Featured Projects</h1>

            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: 20 }}> */}
            <div>
                <ProjectCard projectName={projects[0].name} projectDesc={projects[0].desc} backgroundImage={projects[0].image} href={projects[0].link} />
                <ProjectCard projectName={projects[0].name} projectDesc={projects[0].desc} backgroundImage={projects[0].image} href={projects[0].link} />
                {/* <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" /> */}
            </div>
        </div>
    );
}