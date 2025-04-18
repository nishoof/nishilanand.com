import ExternalLink from "@/components/ExternalLink";
import { Link } from "next-view-transitions";
import { crtsProjectDetails } from "../projectDetails";
import styles from "../projects.module.css";

export default function Crts() {
  return (
    <div className="centeredDiv">
      <div className={styles.backButton}>
        <Link href="/projects">
          ← Back to Projects
        </Link>
      </div>
      <div className={styles.projectContainer}>
        <h1 className={styles.projectHeading}>{crtsProjectDetails.projectName} </h1>
        <p className={styles.projectDesc}> {crtsProjectDetails.projectDesc} </p>
        <p> <ExternalLink href={crtsProjectDetails.githubLink}>GitHub Repo</ExternalLink> </p>
        <p> <ExternalLink href="https://crts.nishilanand.com">Play at crts.nishilanand.com</ExternalLink> </p>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoIframe}
          src="https://www.youtube-nocookie.com/embed/FiHDix29qyU"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
}