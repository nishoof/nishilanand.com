import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { newsflashProjectDetails as projDetails } from "./projectDetails";

export default function Newsflash() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.projectName}</h1>
        <p>{projDetails.projectDesc}</p>
        <p>This was my first hackathon project :D</p>
        <p>
          <ExternalLink href={projDetails.githubLink}>
            GitHub Repo ↗
          </ExternalLink>
        </p>
      </div>

      <div
        className="unhoverableBox section"
        style={{
          aspectRatio: "16/9",
          position: "relative",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={projDetails.media}
          alt={projDetails.projectName}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
