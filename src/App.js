import React from 'react';
import './index.css';

import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}


export default App;
