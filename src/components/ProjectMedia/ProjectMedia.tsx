import styles from "./ProjectMedia.module.css";

interface ProjectMediaProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProjectMedia({ src, alt, className }: ProjectMediaProps) {
  const classes = [styles.media, className].filter(Boolean).join(" ");

  const isIframe = src.startsWith("https://www.youtube-nocookie.com/embed/");
  const isImage = src.endsWith(".png");
  const isVideo = src.endsWith(".mp4");

  if (!isIframe && !isVideo && !isImage) {
    throw new Error(
      "Media must be a .png / .mp4 file or a valid youtube embed link",
    );
  }

  let mediaContent;
  if (isIframe) {
    mediaContent = <iframe src={src} allowFullScreen title={alt} />;
  } else if (isImage) {
    mediaContent = <img src={src} alt={alt} />;
  } else {
    mediaContent = (
      <video autoPlay playsInline muted loop>
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return <div className={classes}>{mediaContent}</div>;
}
