import style from "@/app/(home)/style.module.css"
import cardStyle from "@/app/(home)/components/projectCardStyle.module.css"

export default function ProjectCard({ backgroundImage, href }: { backgroundImage: string, href: string }) {
    return (
        <a className={`${style.box} ${cardStyle.card}`} style={{ height: 200, backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", flexFlow: "column" }} href={href}>
            <h1>hi</h1>
        </a>
    );
}