import { ProjectDetails } from "../projectDetails";

export const projectDetails: ProjectDetails = {
  projectName: 'crts.io',
  projectDesc: 'A fast-paced racing and combat game with vehicle & character customization with a real-time competitive leaderboard. Used just HTML Canvas & TypeScript (no external libraries like React). Won 1st place at the BLOOM hackathon! Currently working on improving the game and adding new features.',
  media: '/projectPreviews/crts.webm',
  githubLink: 'https://github.com/nishoof/crts'
}

export default function Crts() {
  return (
    <div className={'centeredDiv'}>
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <h1 style={{ margin: '0.3em 0' }}>crts.io</h1>
        <p style={{ margin: '0.3em 0' }}>
          {projectDetails.projectDesc}
        </p>
        <br></br>
        <a href={projectDetails.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <br></br>
        <br></br>
        <a href="https://crts.nishilanand.com" target="_blank" rel="noopener noreferrer">
          Play at crts.nishilanand.com
        </a>
      </div>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/FiHDix29qyU" allowFullScreen />
      {/* <iframe width="1850" height="901" src="https://www.youtube.com/embed/FiHDix29qyU" title="crts.io demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
}