import { crtsProjectDetails } from "../projectDetails";

export default function Crts() {
  return (
    <div className={'centeredDiv'}>
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <h1 style={{ margin: '0.3em 0' }}>crts.io</h1>
        <p style={{ margin: '0.3em 0' }}>
          {crtsProjectDetails.projectDesc}
        </p>
        <br></br>
        <a href={crtsProjectDetails.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <br></br>
        <br></br>
        <a href="https://crts.nishilanand.com" target="_blank" rel="noopener noreferrer">
          Play at crts.nishilanand.com
        </a>
      </div>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/FiHDix29qyU" allowFullScreen />
    </div>
  );
}