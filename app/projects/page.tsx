import { getProjectCards } from "../projects";

export default function Projects() {
    return (
        <div className='centeredDiv'>
            <h1>Projects</h1>

            {getProjectCards()}
        </div>
    );
}