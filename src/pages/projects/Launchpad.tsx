import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { launchpadProjectDetails as projDetails } from "./projectDetails";

export default function Launchpad() {
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
      </div>
    </div>
  );
}
