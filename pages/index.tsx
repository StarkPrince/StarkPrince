import React from "react";
import { ToastContainer } from "react-toastify";
import About from "../components/About";
import Contact from "../components/Contact";
// import MeetEvent from "../components/MeetEvent";
import Navbar from "../components/Navbar";
import Profiles from "../components/Profiles";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function App()
{
  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="homepage">
      <Navbar />
      <About />
      <Profiles />
      <Projects />
      <Skills />
      {/* <MeetEvent /> */}
      <Contact />
    </main>
  );
}