import type { CSSProperties, ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
};

export function ExternalLink({ href, children, style }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener" style={style}>
      {children}
    </a>
  );
}
