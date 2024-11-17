import Me from "./components/Me"
import style from "./style.module.css"

export default function Home() {
    return (
        <div className={style.centeredDiv}>
            <p><i>Site is currently in development...</i></p>

            <Me />

            {/* TODO: finish featured projects component */}
            {/* <FeaturedProjects /> */}

            {/* Placeholder, delete later: */}
            <h1>Featured Projects</h1>
            <ul>
                <li><a href="https://github.com/nishoof/newsflash">Newsflash (3rd place at DEPLOY/24!)</a></li>
                <li><a href="https://github.com/nishoof/elevator">Elevator Simulator</a></li>
            </ul>
        </div>
    );
}
