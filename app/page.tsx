import ConnectIcons from "../components/ConnectIcons";
import ProjectCard from "../components/ProjectCard";
import { crtsProjectDetails, elevatorProjectDetails, newsflashProjectDetails } from "./projects/projectDetails";

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
        <h2>Projects</h2>
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