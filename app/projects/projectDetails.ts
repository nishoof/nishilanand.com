export interface ProjectDetails {
    projectName: string;
    projectDesc: string;
    media: string;
    githubLink: string;
}

export const cregProjectDetails: ProjectDetails = {
    projectName: "creg",
    projectDesc: "Your central hub for all course registration needs. Makes course registration easier by directly recommending classes to take based on your various test scores. Includes an AI chatbot with specific knowledge about USF. Won best website (most competitive + largest prize) at DonsHack 25! Currently working with the university to implement this for incoming students.",
    media: "/projectPreviews/creg.png",
    githubLink: "https://github.com/nishoof/creg"
}

export const crtsProjectDetails: ProjectDetails = {
    projectName: "crts.io",
    projectDesc: "A fast-paced racing and combat game with vehicle & character customization and a real-time competitive leaderboard. Used just HTML Canvas & TypeScript (no external libraries like React). Won 1st place at the BLOOM hackathon!",
    media: "/projectPreviews/crts.mp4",
    githubLink: "https://github.com/nishoof/crts"
}

export const elevatorProjectDetails: ProjectDetails = {
    projectName: "Elevator Simulator",
    projectDesc: "A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.",
    media: "/projectPreviews/elevator.png",
    githubLink: "https://github.com/nishoof/elevator"
}

export const newsflashProjectDetails: ProjectDetails = {
    projectName: "Newsflash",
    projectDesc: "A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!",
    media: "/projectPreviews/newsflash.png",
    githubLink: "https://github.com/nishoof/newsflash"
}
