import HackathonLog from "@/pages/HackathonLog";
import Home from "@/pages/Home";
import Creg from "@/pages/projects/Creg";
import Crts from "@/pages/projects/Crts";
import Elevator from "@/pages/projects/Elevator";
import Newsflash from "@/pages/projects/Newsflash";
import SearchEngine from "@/pages/projects/SearchEngine";
import { Analytics } from "@vercel/analytics/react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon-log" element={<HackathonLog />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/projects/creg" element={<Creg />} />
        <Route
          path="/projects/crts"
          element={<Navigate to="/projects/crts.io" replace />}
        />
        <Route path="/projects/crts.io" element={<Crts />} />
        <Route path="/projects/elevator" element={<Elevator />} />
        <Route path="/projects/newsflash" element={<Newsflash />} />
        <Route path="/projects/search-engine" element={<SearchEngine />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </>
  );
}
