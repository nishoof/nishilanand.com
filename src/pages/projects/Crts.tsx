import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import { crtsProjectDetails as projDetails } from "./projectDetails";

export default function Crts() {
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
          <ExternalLink href="https://crts.nishilanand.com">
            Play the game! ↗
          </ExternalLink>
        </p>
      </div>

      <ProjectMedia
        src="https://www.youtube-nocookie.com/embed/FiHDix29qyU"
        alt="crts.io demo"
        className="section"
      />
    </div>
  );
}
