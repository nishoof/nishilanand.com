import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from './ExternalLink';

interface ProjectCardProps {
  projectName: string;
  projectDesc: string;
  media: string;
  redirect: string;
}

export default function ProjectCard({ projectName, projectDesc, media, redirect }: ProjectCardProps) {
  // Check if media is a valid file
  const isImage = media.endsWith('.png');
  const isVideo = media.endsWith('.mp4');

  if (!isVideo && !isImage) {
    throw new Error('Media must be a .png or .mp4 file');
  }

  // Common styles
  const cardContentStyles = {
    display: 'flex',
    flexFlow: 'column' as const,
    textDecoration: 'none'
  };

  // Media (either image or video of the project)
  const MediaContent = (
    <div style={{ aspectRatio: '16/9', position: 'relative', backgroundColor: 'transparent' }}>
      {isImage ? (
        <Image
          src={media}
          alt={projectName}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      ) : (
        <video
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );

  // Card content
  const CardContent = (
    <>
      {MediaContent}
      <div style={{ padding: 20 }}>
        <div>
          <h2 style={{ color: 'var(--color-light-1)' }}>{projectName}</h2>
        </div>
        <p style={{ margin: 0 }}>{projectDesc}</p>
      </div>
    </>
  );

  // Check if the redirect is an external link
  const isExternalLink = redirect.startsWith('http');

  return (
    <div className="box" style={{ marginBottom: '2em', overflow: 'hidden' }}>
      {isExternalLink ? (
        <ExternalLink href={redirect} style={cardContentStyles}>
          {CardContent}
        </ExternalLink>
      ) : (
        <Link href={redirect} style={cardContentStyles}>
          {CardContent}
        </Link>
      )}
    </div>
  );
}