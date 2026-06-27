import type { CSSProperties, ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function ExternalLink({
  href,
  children,
  className,
  style,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
