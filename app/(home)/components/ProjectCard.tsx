import Image from "next/image";
import style from "@/app/(home)/style.module.css"
// import cardStyle from "@/app/(home)/components/projectCardStyle.module.css"

export default function ProjectCard({ projectName, projectDesc, backgroundImage, href }: { projectName: string, projectDesc: string, backgroundImage: string, href: string }) {
    const linkStyle = {
        height: 400,
        // backgroundImage: backgroundImage,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        display: "flex",
        flexFlow: "column",
        textDecoration: 'none',
        color: 'var(--color-light-3)',
    };

    // color: var(--color-dark-1);
    // text-decoration: none;
    return (
        <div className={style.box} style={{ marginBottom: '2em' }}>
            <a style={linkStyle} href={href}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={backgroundImage}
                        alt={projectName}
                        layout="fill"
                        objectFit="cover"
                        style={{ zIndex: -1 }}
                    />
                </div>
            </a>
            <div style={{ padding: 10 }}>
                <h2>{projectName}</h2>
                <p style={{ margin: 0 }}>{projectDesc}</p>
            </div>
        </div>
    );
}