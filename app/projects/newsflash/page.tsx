import { newsflashProjectDetails } from "../projectDetails";

export default function Newsflash() {
  return (
    <div className={'centeredDiv'}>
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <h1 style={{ margin: '0.3em 0' }}>{newsflashProjectDetails.projectName}</h1>
        <p style={{ margin: '0.3em 0' }}>
          {newsflashProjectDetails.projectDesc}
        </p>
        <br></br>
        <a href={newsflashProjectDetails.githubLink} target="_blank" rel="noopener">
          GitHub Repo
        </a>
        <br></br>
        <br></br>
        <a href="https://crts.nishilanand.com" target="_blank" rel="noopener">
          Play at crts.nishilanand.com
        </a>
      </div>
      <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '2em' }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/FiHDix29qyU"
          allowFullScreen
        />
      </div>
    </div>
  );
}