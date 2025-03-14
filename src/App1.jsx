// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Card from "./Card";
import CardContent from "./CardContent";
import "./Card.css";
import "./Global.css";

const Home = () => (
  <div className="card-content">
    <h1>Nando Decima</h1>
    <p>Software Engineer | Audio Engineer</p>
  </div>
);


const About = () => (
  <Card className="m-4 p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-2">I am a software engineer with a deep passion for creativity and problem-solving. My background in audio engineering and sales has honed my ability to understand user needs, craft seamless digital experiences, and push the boundaries of what’s possible through technology.</p>
    </CardContent>
  </Card>
);

const History = () => (
  <Card className="m-4 p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold">Professional History</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>Freelance Audio Engineer (2020-Present) - Collaborated with artists to refine and master music to industry standards.</li>
        <li>Jimmie Johnson Chevrolet (2018-2020) - Developed strong sales and negotiation skills, learning how to connect user needs with tailored solutions.</li>
      </ul>
    </CardContent>
  </Card>
);

const Projects = () => (
  <Card className="m-4 p-6">
    <CardContent>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-2 list-disc list-inside">
        <li><strong>Music Collaboration Platform</strong> - A free web app enabling musicians to collaborate remotely in real time. (Coming soon!)</li>
        <li><strong>Caesar Cipher Encryption Tool</strong> - A custom JavaScript-based encryption/decryption project with added complexity.</li>
        <li><strong>Note-Taking App with Local Storage</strong> - A simple yet effective notes app using JavaScript and browser storage.</li>
      </ul>
    </CardContent>
  </Card>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center p-6">
        <nav className="flex space-x-4 mb-6">
          <Link className="text-blue-500" to="/">Home</Link>
          <Link className="text-blue-500" to="/about">About</Link>
          <Link className="text-blue-500" to="/history">History</Link>
          <Link className="text-blue-500" to="/projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

