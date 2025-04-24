import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
};

export function ExternalLink({ href, children, style }: ExternalLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener" style={style}>
      {children}
    </Link>
  );
}
