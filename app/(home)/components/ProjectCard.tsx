import Image from "next/image";
import style from "@/app/(home)/style.module.css";

export default function ProjectCard({ projectName, projectDesc, backgroundImage, href }: { projectName: string, projectDesc: string, backgroundImage: string, href: string }) {
    return (
        <div className={style.box} style={{ marginBottom: '2em', overflow: "hidden" }}>
            <a style={{ display: 'flex', flexFlow: 'column', textDecoration: 'none' }} href={href}>
                <div style={{ height: 400, position: 'relative' }}>
                    <Image
                        src={backgroundImage}
                        alt={projectName}
                        layout="fill"
                        objectFit="cover"
                        style={{ zIndex: -1 }}
                    />
                </div>
                <div style={{ padding: 20 }}>
                    <h2 style={{ color: 'var(--color-light-1)' }}>{projectName}</h2>
                    <p style={{ margin: 0, color: 'var(--color-light-2)' }}>{projectDesc}</p>
                </div>
            </a>
        </div>
    );
}