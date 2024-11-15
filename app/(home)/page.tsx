import '@/app/(home)/style.css';

export default function Home() {
  return (
    <div className="wrapper">

      <h1>Hello, I&apos;m Nishil! 👋</h1>

      <p>
        I&apos;m a student at the <a href="https://www.usfca.edu/">University of San Francisco</a> majoring in Computer
        Science!
      </p>

      <h2>About Me</h2>

      <ul role="list">
        <li><span>🔭 I&apos;m currently working on my courses (CS 112 &amp; MATH 201) mostly. I also do personal
          projects whenever I come up with ideas, such as my <a
            href="https://github.com/nishoof/elevator">Elevator
            Simulator Game</a>
        </span></li>

        <li><span>📫 Contact Me
          <ul>
            <li><span>LinkedIn: <a href="https://www.linkedin.com/in/nishilanand/">nishilanand</a></span></li>
            <li><span>Discord: @nishoof</span></li>
          </ul>
        </span></li>

        <li><span>😄 Pronouns: he/him</span></li>

        <li><span>⚡ Fun fact: I like camping, backpacking, and hiking 🏕️.
          I also play videogames, mostly Valorant 🕹️</span></li>
      </ul>

      <h2>Projects</h2>

      <ul>
        <li><span><a href="https://github.com/nishoof/newsflash">Newsflash</a>
          <ul>
            <li><span>3rd place at DEPLOY/24!</span></li>
            <li><span>Summarizes the current news based on user preferences</span></li>
          </ul>
        </span></li>
        <li><span><a href="https://github.com/nishoof/elevator">Elevator Simulator Game</a></span></li>
        <li><span><a href="https://github.com/nishoof/pet-faadil">Pet Faadil (a discord bot)</a></span></li>
      </ul>

    </div>
  );
}
