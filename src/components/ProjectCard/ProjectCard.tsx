import { ExternalLink } from "@/components/ExternalLink";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name: string;
  descShort: string;
  media: string;
  redirect: string;
}

export function ProjectCard({
  name,
  descShort,
  media,
  redirect,
}: ProjectCardProps) {
  // Check if media is a valid file
  const isImage = media.endsWith(".png");
  const isVideo = media.endsWith(".mp4");

  if (!isVideo && !isImage) {
    throw new Error("Media must be a .png or .mp4 file");
  }

  const textContent = (
    <div className={styles.text}>
      <div className={styles.head}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>
      <p className={styles.descShort}>{descShort}</p>
    </div>
  );

  const mediaContent = (
    <div className={styles.media}>
      {isImage ? (
        <img src={media} alt={name} />
      ) : (
        <video autoPlay playsInline muted loop>
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );

  const content = (
    <>
      {textContent}
      {mediaContent}
    </>
  );

  const isExternalLink = redirect.startsWith("http");

  return (
    <div className={styles.project}>
      {isExternalLink ? (
        <ExternalLink href={redirect} className={styles.link}>
          {content}
        </ExternalLink>
      ) : (
        <Link to={`/${redirect}`} className={styles.link}>
          {content}
        </Link>
      )}
    </div>
  );
}
