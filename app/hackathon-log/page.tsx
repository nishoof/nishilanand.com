import { BackButton } from "@/components/BackButton";
import { ExternalLink } from "@/components/ExternalLink";

interface Hackathon {
  date: string;
  location: string;
  name: string;
  prizes: string;
  projectName: string;
  projectLink: string;
}

const hackathons: Hackathon[] = [
  {
    date: "Apr 4-6, 2025",
    location: "USF",
    name: "DonsHack 25",
    prizes: "Best Website (most competitive + prizes)",
    projectName: "creg",
    projectLink: "http://github.com/nishoof/creg",
  },
  {
    date: "Mar 22, 2025",
    location: "Cloudflare, SF",
    name: "AI Agents Hackathon - GTC 2025 Edition",
    prizes: "Best use of Tavus AI (3rd), Best use of Windsurf (2nd)",
    projectName: "Launchpad",
    projectLink: "http://github.com/nishoof/cloudflare-hack",
  },
  {
    date: "Feb 28 - Mar 2, 2025",
    location: "USF",
    name: "BLOOM",
    prizes: "1st Overall",
    projectName: "crts.io",
    projectLink: "http://github.com/nishoof/crts",
  },
  {
    date: "Nov 8-10, 2024",
    location: "USF",
    name: "DEPLOY/24",
    prizes: "3rd Overall",
    projectName: "Newsflash",
    projectLink: "http://github.com/nishoof/newsflash",
  }
]

const UNICODE_NO_BREAK_SPACE = "\u00A0";

function HackathonRow({ hackathon }: { hackathon: Hackathon }) {
  return (
    <tr key={hackathon.name}>
      <td>{hackathon.date}</td>
      <td>{hackathon.location}</td>
      <td>{hackathon.name}</td>
      <td>{hackathon.prizes}</td>
      <td>
        <ExternalLink href={hackathon.projectLink}>
          {hackathon.projectName + UNICODE_NO_BREAK_SPACE + "↗"}
        </ExternalLink>
      </td>
    </tr>
  );
}

export default function HackathonLog() {
  return (
    <div className="page">
      <BackButton />

      <div>
        <h1>Hackathon Log</h1>
        <p>A log of all the hackathons I've been to so far!</p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Name</th>
              <th>Prizes</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {hackathons.map((hackathon, i) => (
              <HackathonRow key={i} hackathon={hackathon} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
