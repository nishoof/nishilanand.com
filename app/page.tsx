import ConnectIcons from '../components/ConnectIcons';
import ProjectCard from '../components/ProjectCard';

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
          projectName='crts.io'
          projectDesc='A fast-paced racing and combat game with vehicle & character customization with a real-time competitive leaderboard. Used just HTML Canvas & TypeScript (no external libraries like React). Won 1st place at the BLOOM hackathon! Currently working on improving the game and adding new features.'
          media='/projectCards/crts.webm'
          href='https://github.com/nishoof/crts'
        />
        <ProjectCard
          projectName='Newsflash'
          projectDesc='A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!'
          media='/projectCards/newsflash.png'
          href='https://github.com/nishoof/newsflash'
        />
        <ProjectCard
          projectName='Elevator Simulator'
          projectDesc='A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.'
          media='/projectCards/elevator.png'
          href='https://github.com/nishoof/elevator'
        />
      </div>
    </div>
  );
}