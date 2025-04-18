import Link from "next/link";
import { CSSProperties } from "react";
import { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function ExternalLink({ href, children, style }: ExternalLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener" style={style}>
      {children}
    </Link>
  );
}