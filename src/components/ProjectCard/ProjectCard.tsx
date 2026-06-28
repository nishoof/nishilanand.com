import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
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
    <ProjectMedia src={media} alt={name} className={styles.teaser} />
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
