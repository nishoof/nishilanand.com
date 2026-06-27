export interface ProjectDetails {
  projectName: string;
  projectDesc: string;
  projectDescShort: string;
  media: string;
  githubLink: string;
}

export const cregProjectDetails: ProjectDetails = {
  projectName: "creg",
  projectDesc:
    "Your central hub for all course registration needs. Makes course registration easier by directly recommending classes to take based on your various test scores. Includes an AI chatbot with specific knowledge about USF. Won best website (most competitive + largest prize) at DonsHack 25! Currently working with the university to implement this for incoming students.",
  projectDescShort:
    "A course-registration hub that recommends classes and answers USF questions with AI. Best Website at DonsHack 25.",
  media: "/projectPreviews/creg.png",
  githubLink: "https://github.com/nishoof/creg",
};

export const crtsProjectDetails: ProjectDetails = {
  projectName: "crts.io",
  projectDesc:
    "A fast-paced racing and combat game with vehicle & character customization and a real-time competitive leaderboard. Used just HTML Canvas & TypeScript (no external libraries like React). Won 1st place at the BLOOM hackathon!",
  projectDescShort:
    "A fast-paced racing and combat game with live leaderboards, built from scratch on HTML Canvas. 1st place at BLOOM.",
  media: "/projectPreviews/crts.mp4",
  githubLink: "https://github.com/nishoof/crts",
};

export const elevatorProjectDetails: ProjectDetails = {
  projectName: "Elevator Simulator",
  projectDesc:
    "A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.",
  projectDescShort:
    "A multitasking game where you juggle elevators to get people to their floors on time. Built 100% in Java.",
  media: "/projectPreviews/elevator.png",
  githubLink: "https://github.com/nishoof/elevator",
};

export const newsflashProjectDetails: ProjectDetails = {
  projectName: "Newsflash",
  projectDesc:
    "A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!",
  projectDescShort:
    "A personalized AI summary of the daily news. 3rd place at DEPLOY/24.",
  media: "/projectPreviews/newsflash.png",
  githubLink: "https://github.com/nishoof/newsflash",
};
