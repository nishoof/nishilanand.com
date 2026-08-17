import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import { cregProjectDetails as projDetails } from "./projectDetails";

export default function Creg() {
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
          <ExternalLink href="https://creg.vercel.app/">
            creg.vercel.app ↗
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
