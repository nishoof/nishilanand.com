import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";
import { crtsProjectDetails as projDetails } from "../projectDetails";

export default function Crts() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>{projDetails.projectName}</h1>
        <p>{projDetails.projectDesc}</p>
        <p><ExternalLink href={projDetails.githubLink}>GitHub Repo ↗</ExternalLink></p>
        <p><ExternalLink href="https://crts.nishilanand.com">Play the game! ↗</ExternalLink></p>
      </div>

      <div className="videoContainer section">
        <iframe
          className="videoIframe"
          src="https://www.youtube-nocookie.com/embed/FiHDix29qyU"
          allowFullScreen
        />
      </div>
    </div>
  );
}
