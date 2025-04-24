import { ExternalLink } from "@/components/ExternalLink";
import Image from "next/image";

// A single icon
function ConnectIcon({ link, imageSrc, imageAlt }: { link: string, imageSrc: string, imageAlt: string }) {
  const borderRadius = 5;
  const padding = 7;
  const innerSize = 40 - padding * 2;

  return (
    <ExternalLink href={link}>
      <div className="box" style={{ width: innerSize, height: innerSize, borderRadius: borderRadius, padding: padding }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={innerSize}
          height={innerSize}
          draggable={false}
        />
      </div>
    </ExternalLink>
  );
}

// All of the icons
export function ConnectIcons() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <ConnectIcon
        link="https://github.com/nishoof"
        imageSrc="/connect/github.svg"
        imageAlt="GitHub"
      />

      <ConnectIcon
        link="https://linkedin.com/in/nishilanand/"
        imageSrc="/connect/linkedin.svg"
        imageAlt="LinkedIn"
      />

      <ConnectIcon
        link="mailto:nishilanand21@gmail.com"
        imageSrc="/connect/mail.svg"
        imageAlt="Mail"
      />
    </div>
  );
}
