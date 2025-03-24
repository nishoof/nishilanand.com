import Image from 'next/image';

// A single icon
function ConnectIcon({ size, link, imageSrc, imageAlt }: { size: number, link: string, imageSrc: string, imageAlt: string }) {
  const borderRadius = 5;
  const padding = 7;
  const innerSize = size - padding * 2;

  const ThisIcon = () => {
    return (
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={innerSize}
        height={innerSize}
        draggable={false}
      />
    );
  }

  return (
    <div style={{ width: size, height: size }}>
      <a href={link}>
        <div className='box' style={{ borderRadius: borderRadius, padding: padding, width: innerSize, height: innerSize }}>
          <ThisIcon />
        </div>
      </a>
    </div>
  );
}

// All of the icons
export default function ConnectIcons() {
  const iconSize = 40;

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <ConnectIcon
        size={iconSize}
        link='https://github.com/nishoof'
        imageSrc='/connect/github.svg'
        imageAlt='GitHub'
      />

      <ConnectIcon
        size={iconSize}
        link='https://linkedin.com/in/nishilanand/'
        imageSrc='/connect/linkedin.svg'
        imageAlt='GitHub'
      />

      <ConnectIcon
        size={iconSize}
        link='mailto:nishilanand21@gmail.com'
        imageSrc='/connect/mail.svg'
        imageAlt='Mail'
      />
    </div>
  );
}