import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { searchEngineProjectDetails as projDetails } from "./projectDetails";

export default function SearchEngine() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.name}</h1>
        <p>{projDetails.descriptionLong}</p>
        <p>
          Currently a work in progress. Planning on adding more polish and maybe
          deploying it in September.
        </p>
        <p>
          <ExternalLink href={projDetails.githubLink}>
            GitHub Repo ↗
          </ExternalLink>
        </p>
      </div>
    </div>
  );
}
