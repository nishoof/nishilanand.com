import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import { newsflashProjectDetails as projDetails } from "./projectDetails";

export default function Newsflash() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.name}</h1>
        <p>{projDetails.descriptionLong}</p>
        <p>This was my first hackathon project :D</p>
        <p>
          <ExternalLink href={projDetails.githubLink}>
            GitHub Repo ↗
          </ExternalLink>
        </p>
      </div>

      <ProjectMedia
        src={projDetails.media}
        alt={projDetails.name}
        className="section"
      />
    </div>
  );
}
