import Image from "next/image";

export default function ProjectCard({ projectName, projectDesc, backgroundImage, href }: { projectName: string, projectDesc: string, backgroundImage: string, href: string }) {
  return (
    <div className={"box"} style={{ marginBottom: "2em", overflow: "hidden" }}>
      <a style={{ display: "flex", flexFlow: "column", textDecoration: "none" }} href={href}>
        <div style={{ height: 400, position: "relative", backgroundColor: "transparent" }}>
          <Image
            priority
            src={backgroundImage}
            alt={projectName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div style={{ padding: 20 }}>
          <div>
            <h2 style={{ color: "var(--color-light-1)" }}>{projectName}</h2>
          </div>
          <p style={{ margin: 0 }}>{projectDesc}</p>
        </div>
      </a>
    </div>
  );
}