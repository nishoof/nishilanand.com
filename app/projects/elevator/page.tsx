import { ProjectDetails } from "../projectDetails";

export const projectDetails: ProjectDetails = {
  projectName: 'Elevator Simulator',
  projectDesc: 'A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.',
  media: '/projectPreviews/elevator.png',
  githubLink: 'https://github.com/nishoof/elevator'
}

export default function Elevator() {
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