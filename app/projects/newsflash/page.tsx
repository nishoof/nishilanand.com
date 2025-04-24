import BackButton from "@/components/BackLink";
import ExternalLink from "@/components/ExternalLink";
import Image from "next/image";
import { newsflashProjectDetails as projDetails } from "../projectDetails";

export default function Newsflash() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.projectName}</h1>
        <p>{projDetails.projectDesc}</p>
        <p>This was my first hackathon project :D</p>
        <p><ExternalLink href={projDetails.githubLink}>GitHub Repo ↗</ExternalLink></p>
      </div>

      <div className="unhoverableBox section" style={{ aspectRatio: "16/9", position: "relative", backgroundColor: "transparent" }}>
        <Image
          src={projDetails.media}
          alt={projDetails.projectName}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}