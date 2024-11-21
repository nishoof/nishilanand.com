import ProjectCard from "./ProjectCard";
// import elevatorImg from "@/public/images/projectCards/elevator.png"

export default function FeaturedProjects() {
    const projects = [
        {
            name: "Newsflash",
            desc: "A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!",
            link: "https://github.com/nishoof/newsflash",
            image: '/images/projectCards/newsflash.png'
        },
        {
            name: "Elevator Simulator",
            desc: "A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience!",
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
                <ProjectCard projectName={projects[1].name} projectDesc={projects[1].desc} backgroundImage={projects[1].image} href={projects[1].link} />
                {/* <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" />
                <ProjectCard backgroundImage={`url(${elevatorImg.src})`} href="https://github.com/nishoof/elevator" /> */}
            </div>
        </div>
    );
}