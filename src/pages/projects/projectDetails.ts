export interface ProjectDetails {
  name: string;
  descriptionShort: string;
  descriptionLong: string;
  media?: string;
  githubLink: string;
}

export const cregProjectDetails: ProjectDetails = {
  name: "creg",
  descriptionShort:
    "A course-registration hub that recommends classes and answers USF questions with AI. Best Website at DonsHack 25.",
  descriptionLong:
    "Your central hub for all course registration needs. Makes course registration easier by directly recommending classes to take based on your various test scores. Includes an AI chatbot with specific knowledge about USF. Won best website (most competitive + largest prize) at DonsHack 25! Currently working with the university to implement this for incoming students.",
  media: "/projectPreviews/creg.png",
  githubLink: "https://github.com/nishoof/creg",
};

export const crtsProjectDetails: ProjectDetails = {
  name: "crts.io",
  descriptionShort:
    "A fast-paced racing and combat game with live leaderboards, built from scratch on HTML Canvas. 1st place at BLOOM.",
  descriptionLong:
    "A fast-paced racing and combat game with vehicle & character customization and a real-time competitive leaderboard. Used just HTML Canvas & TypeScript (no external libraries like React). Won 1st place at the BLOOM hackathon!",
  media: "/projectPreviews/crts.mp4",
  githubLink: "https://github.com/nishoof/crts",
};

export const elevatorProjectDetails: ProjectDetails = {
  name: "Elevator Simulator",
  descriptionShort:
    "A multitasking game where you juggle elevators to get people to their floors on time. Built 100% in Java.",
  descriptionLong:
    "A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.",
  media: "/projectPreviews/elevator.png",
  githubLink: "https://github.com/nishoof/elevator",
};

export const newsflashProjectDetails: ProjectDetails = {
  name: "Newsflash",
  descriptionShort:
    "A personalized AI summary of the daily news. 3rd place at DEPLOY/24.",
  descriptionLong:
    "A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!",
  media: "/projectPreviews/newsflash.png",
  githubLink: "https://github.com/nishoof/newsflash",
};

export const searchEngineProjectDetails: ProjectDetails = {
  name: "search engine",
  descriptionShort:
    "A concurrent search engine built from scratch in Go. Crawls pages using over a thousand threads, builds an inverted index, and ranks results using TF-IDF.",
  descriptionLong:
    "A concurrent search engine built from scratch in Go. Crawls the web from a seed URL using a thousand worker threads while following robots.txt rules. Extracts words from the HTML and stores them in an inverted index (in-memory or SQLite). Search ranks documents by relevance against a search query using TF-IDF (Term Frequency-Inverse Document Frequency). Improved SQLite index performance using SQL journal-mode tuning, indexes, transactional batch flushes, and prepared statements. Also includes a simple web UI.",
  githubLink: "https://github.com/nishoof/search-engine",
};

export const chatProjectDetails: ProjectDetails = {
  name: "chat",
  descriptionShort:
    "A real-time chat app (like Discord/Slack) built with 4 containerized microservices (Go, Java, NestJS, and Nginx). Deployed using Kubernetes on AWS EKS with Terraform.",
  descriptionLong:
    "A real-time chat application (like Discord/Slack). Split into four containerized microservices. The auth service is written in Go using Gin, and is responsible for handling Google OAuth and creating the JWT. The realtime chat service is written in TypeScript using NestJS and Socket.io, and is responsible for websocket messaging. The chat history service is written in Java using Spring Boot and JPA/Hibernate, and is responsible for storing messages in the database. The frontend service is a React frontend written in TypeScript, built with Vite, and served with Nginx. Everything is deployed on AWS. The microservices are deployed using Kubernetes on AWS EKS. The database is Postgres on AWS RDS. All infrastructure (EKS, RDS, VPC, Route53, etc.) is provisioned with Terraform (IaC), with multi-environment CI/CD for zero-downtime blue/green deployments. Observability (logging, metrics, and email alerts) is self-hosted using Prometheus, Grafana, and Loki.",
  githubLink: "https://github.com/nishoof/chat",
};

export const launchpadProjectDetails: ProjectDetails = {
  name: "Launchpad",
  descriptionShort:
    "An onboarding tool that analyzes a GitHub repo and generates a walkthrough video. 3rd Best Use of Tavus AI and 2nd Best Use of Windsurf at the AI Agents Hackathon at Cloudflare.",
  descriptionLong:
    "An onboarding tool that saves developer time. Pulls a GitHub codebase using the GitHub API, analyzes it with Google Gemini, and generates an onboarding video with Tavus AI that walks through the codebase. Won 3rd Best Use of Tavus AI and 2nd Best Use of Windsurf at the AI Agents Hackathon at Cloudflare! Made in March 2025.",
  githubLink: "https://github.com/nishoof/cloudflare-hack",
};
