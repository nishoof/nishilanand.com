import { ConnectIcons } from "@/components/ConnectIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import {
  cregProjectDetails,
  crtsProjectDetails,
  elevatorProjectDetails,
  newsflashProjectDetails,
} from "./projects/projectDetails";

export default function Home() {
  return (
    <div className="page">
      <div className="section" style={{ margin: "25% 0 4.5em 0" }}>
        <h1
          style={{
            fontSize: "clamp(2.25em, 12vw, 4em)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            // margin: "0.75rem 0 1.25rem",
          }}
        >
          Nishil Anand
        </h1>
        <div style={{ margin: "1.5em 0" }}>
          <p>Software Engineering Intern at Capital One</p>
          <p>Computer Science at the University of San Francisco</p>
          <p>Backend Development</p>
        </div>
        <ConnectIcons />
      </div>

      <div style={{ margin: "4.5em 0" }}>
        <h2>Hackathon Log</h2>
        <Link to="/hackathon-log">View my hackathon log →</Link>
      </div>

      <div className="section">
        <h2>Featured Projects</h2>
        <ProjectCard
          name={cregProjectDetails.projectName}
          descShort={cregProjectDetails.projectDescShort}
          media={cregProjectDetails.media}
          redirect="projects/creg"
        />
        <ProjectCard
          name={crtsProjectDetails.projectName}
          descShort={crtsProjectDetails.projectDescShort}
          media={crtsProjectDetails.media}
          redirect="projects/crts.io"
        />
        <ProjectCard
          name={elevatorProjectDetails.projectName}
          descShort={elevatorProjectDetails.projectDescShort}
          media={elevatorProjectDetails.media}
          redirect="projects/elevator"
        />
        <ProjectCard
          name={newsflashProjectDetails.projectName}
          descShort={newsflashProjectDetails.projectDescShort}
          media={newsflashProjectDetails.media}
          redirect="projects/newsflash"
        />
      </div>
    </div>
  );
}
