import { ProjectDetails } from "../projectDetails";

export const projectDetails: ProjectDetails = {
  projectName: 'Newsflash',
  projectDesc: 'A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!',
  media: '/projectPreviews/newsflash.png',
  githubLink: 'https://github.com/nishoof/newsflash'
}

export default function Newsflash() {
  return (
    <div className={'centeredDiv'}>
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <h1 style={{ margin: '0.3em 0' }}>{projectDetails.projectName}</h1>
        <p style={{ margin: '0.3em 0' }}>
          {projectDetails.projectDesc}
        </p>
      </div>
    </div>
  );
}