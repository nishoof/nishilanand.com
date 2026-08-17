import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import { elevatorProjectDetails as projDetails } from "./projectDetails";

export default function Elevator() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.name}</h1>
        <p>{projDetails.descriptionLong}</p>
        <p>
          <ExternalLink href={projDetails.githubLink}>
            GitHub Repo ↗
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="https://github.com/nishoof/elevator/releases">
            GitHub Releases (download playable game) ↗
          </ExternalLink>
        </p>
      </div>

      {projDetails.media && (
        <ProjectMedia
          src={projDetails.media}
          alt={projDetails.name}
          className="section"
        />
      )}
    </div>
  );
}
