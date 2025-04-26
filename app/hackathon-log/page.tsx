import { BackButton } from "@/components/BackButton";

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
            <tr>
              <td>Apr 4-6, 2025</td>
              <td>USF</td>
              <td>DonsHack 25</td>
              <td>Best Website (most competitive + prizes) </td>
              <td>creg</td>
            </tr>
            <tr>
              <td>Mar 22, 2025</td>
              <td>Cloudflare</td>
              <td>AI Agents Hackathon - GTC 2025 Edition</td>
              <td>Best use of Tavus AI (3rd), Best use of Windsurf (2nd)</td>
              <td>Launchpad</td>
            </tr>
            <tr>
              <td>Feb 28 - Mar 2, 2025</td>
              <td>USF</td>
              <td>BLOOM</td>
              <td>1st Overall</td>
              <td>crts.io</td>
            </tr>
            <tr>
              <td>Nov 8-10, 2024</td>
              <td>USF</td>
              <td>DEPLOY/24</td>
              <td>3rd Overall</td>
              <td>Newsflash</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
