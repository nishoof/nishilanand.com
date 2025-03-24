import Image from 'next/image';

interface ProjectCardProps {
  projectName: string;
  projectDesc: string;
  media: string;
  href: string;
}

export default function ProjectCard({ projectName, projectDesc, media, href }: ProjectCardProps) {
  // Check if media is a valid file
  const isVideo = media.endsWith('.mp4') || media.endsWith('.webm');
  const isImage = media.endsWith('.png');
  if (!isVideo && !isImage)
    throw new Error('Media must be a .png or .mp4 file');

  // Make media div
  const mediaDiv = (
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
          src={media}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}
    </div>
  )

  return (
    <div className={'box'} style={{ marginBottom: '2em', overflow: 'hidden' }}>
      <a style={{ display: 'flex', flexFlow: 'column', textDecoration: 'none' }} href={href}>
        {mediaDiv}
        <div style={{ padding: 20 }}>
          <div>
            <h2 style={{ color: 'var(--color-light-1)' }}>{projectName}</h2>
          </div>
          <p style={{ margin: 0 }}>{projectDesc}</p>
        </div>
      </a>
    </div>
  );
}