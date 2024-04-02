import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import White from "./Components/White";
// import Shery, { mouseFollower } from "sheryjs";
// import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   Shery.mouseFollower({
  //     //Parameters are optional.
  //     skew: true,
  //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //     duration: 1,
  //   });
  // }, []);
  // Shery.mouseFollower();

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        {/* <White/> */}
        <Project/>
        <Contact />
        
      </>
    </>
  );
};

export default App;
