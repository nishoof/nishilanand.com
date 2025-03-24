import ConnectIcons from '../components/ConnectIcons';
import ProjectCard from '../components/ProjectCard';
import { crtsProjectDetails } from './projects/projectDetails';
import { newsflashProjectDetails } from './projects/projectDetails';
import { elevatorProjectDetails } from './projects/projectDetails';

export default function Home() {
  return (
    <div className={'centeredDiv'}>
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <ConnectIcons />
        <h1 style={{ margin: '0.3em 0' }}>Nishil Anand</h1>
        <p style={{ margin: '0.3em 0' }}>
          I am a student at the University of San Francisco majoring in Computer Science! Currently, I think I'm interested in backend development, but I am open to exploring other fields as well. Currently looking for internships to leverage my skills and further develop myself.
        </p>
      </div>

      <div style={{ margin: '2em 0' }}>
        <h1>Projects</h1>
        <ProjectCard
          projectName={crtsProjectDetails.projectName}
          projectDesc={crtsProjectDetails.projectDesc}
          media={crtsProjectDetails.media}
          redirect='projects/crts.io'
        />
        <ProjectCard
          projectName={newsflashProjectDetails.projectName}
          projectDesc={newsflashProjectDetails.projectDesc}
          media={newsflashProjectDetails.media}
          redirect={newsflashProjectDetails.githubLink}
        />
        <ProjectCard
          projectName={elevatorProjectDetails.projectName}
          projectDesc={elevatorProjectDetails.projectDesc}
          media={elevatorProjectDetails.media}
          redirect={elevatorProjectDetails.githubLink}
        />
      </div>
    </div>
  );
}