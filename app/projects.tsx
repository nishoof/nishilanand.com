import ProjectCard from "./(home)/components/ProjectCard"

export const projects = [
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
    },
    {
        name: "rahhh",
        desc: "A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience!",
        link: "https://github.com/nishoof/elevator",
        image: '/images/projectCards/elevator.png'
    }
]

export const featuredProjects = [
    projects[0],
    projects[1]
]

export function getFeaturedProjectCards() {
    return (
        featuredProjects.map(project => getCard(project))
    )
}

export function getProjectCards() {
    return (
        projects.map(project => getCard(project))
    )
}

function getCard(project: { name: string; desc: string; link: string; image: string }) {
    return (
        <ProjectCard
            key={project.name}
            projectName={project.name}
            projectDesc={project.desc}
            backgroundImage={project.image}
            href={project.link}
        />
    )
}