import { ConnectIcons } from "@/components/ConnectIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "next-view-transitions";
import { cregProjectDetails, crtsProjectDetails, elevatorProjectDetails, newsflashProjectDetails } from "./projects/projectDetails";

export default function Home() {
  return (
    <div className="page">
      <div className="section">
        <ConnectIcons />
        <h1>Nishil Anand</h1>
        <div>
          <p style={{ margin: 0 }}>Computer Science Major at the University of San Francisco</p>
          <p style={{ margin: 0 }}>Currently interested in backend development, but open to exploring other fields as well!</p>
        </div>
      </div>

      <div className="section">
        <h2>Hackathon Log</h2>
        <Link href="/hackathon-log">View my hackathon log →</Link>
      </div>

      <div className="section">
        <h2>Featured Projects</h2>
        <ProjectCard
          projectName={cregProjectDetails.projectName}
          projectDesc={cregProjectDetails.projectDesc}
          media={cregProjectDetails.media}
          redirect="projects/creg"
        />
        <ProjectCard
          projectName={crtsProjectDetails.projectName}
          projectDesc={crtsProjectDetails.projectDesc}
          media={crtsProjectDetails.media}
          redirect="projects/crts.io"
        />
        <ProjectCard
          projectName={elevatorProjectDetails.projectName}
          projectDesc={elevatorProjectDetails.projectDesc}
          media={elevatorProjectDetails.media}
          redirect="projects/elevator"
        />
        <ProjectCard
          projectName={newsflashProjectDetails.projectName}
          projectDesc={newsflashProjectDetails.projectDesc}
          media={newsflashProjectDetails.media}
          redirect="projects/newsflash"
        />
      </div>
    </div>
  );
}
