import ConnectIcons from '../components/ConnectIcons';
import Location from '@/components/Location';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: 'Newsflash',
    desc: 'A personalized AI summary of the daily news. Won 3rd place at the DEPLOY/24 hackathon!',
    link: 'https://github.com/nishoof/newsflash',
    image: '/projectCards/newsflash.png'
  },
  {
    name: 'Elevator Simulator',
    desc: 'A game where you multitask to manage multiple elevators to deliver people to their floors on time. Upgrade your elevator to meet the demand, and make sure you drop people off before they run out of patience! Made 100% in Java.',
    link: 'https://github.com/nishoof/elevator',
    image: '/projectCards/elevator.png'
  },
];

const projectCards = projects.map((project, index) => (
  <ProjectCard
    key={index}
    projectName={project.name}
    projectDesc={project.desc}
    backgroundImage={project.image}
    href={project.link}
  />
))

export default function Home() {
  return (
    <div className={'centeredDiv'}>
      {/* Header */}
      <div style={{ margin: '2em 0', lineHeight: 'normal' }}>
        <ConnectIcons />
        <h1 style={{ margin: '0.3em 0' }}>Nishil Anand</h1>
        <div style={{ margin: '0.3em 0' }}>
          <Location />
        </div>
        <p style={{ margin: '0.3em 0' }}>I&apos;m a student at the University of San Francisco majoring in Computer Science!</p>
      </div>

      {/* Projects */}
      <div style={{ margin: '2em 0' }}>
        <h1>Projects</h1>
        {projectCards}
      </div>
    </div>
  );
}