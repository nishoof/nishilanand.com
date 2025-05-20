import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import Image from "next/image";
import { cregProjectDetails as projDetails } from "../projectDetails";

export default function Creg() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.projectName}</h1>
        <p>{projDetails.projectDesc}</p>
        <p><ExternalLink href={projDetails.githubLink}>GitHub Repo ↗</ExternalLink></p>
        <p><ExternalLink href="https://creg.vercel.app/">creg.vercel.app ↗</ExternalLink></p>
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
