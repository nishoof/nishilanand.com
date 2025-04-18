import ExternalLink from "@/components/ExternalLink";
import { Link } from "next-view-transitions";
import { crtsProjectDetails } from "../projectDetails";

export default function Crts() {
  return (
    <div className="page">
      <Link href="/projects">
        ← Back to Projects
      </Link>

      <div>
        <h1>{crtsProjectDetails.projectName}</h1>
        <p>{crtsProjectDetails.projectDesc}</p>
        <p><ExternalLink href={crtsProjectDetails.githubLink}>GitHub Repo</ExternalLink></p>
        <p><ExternalLink href="https://crts.nishilanand.com">Play the game!</ExternalLink></p>
      </div>

      <div className="videoContainer">
        <iframe
          className="videoIframe"
          src="https://www.youtube-nocookie.com/embed/FiHDix29qyU"
          allowFullScreen
        />
      </div>
    </div>
  );
}