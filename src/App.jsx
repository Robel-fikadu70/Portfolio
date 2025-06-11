import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import Accreditations from "./components/sections/Accreditations";
import InfiniteScroll from "./components/sections/Scroll";
import { Experience } from "./components/sections/Experience";
import HeroSection from "./components/sections/Footer";
// import { Testimonial } from "./components/sections/Testimonial";
function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* <div className=" bg-gradient-to-b from-black to-gray-800">
            <ParticlesComponent />
    </div> */}
      {/* <LoaderGGG/> */}
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className="relative">
        {/* <BackgroundLayout> */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <InfiniteScroll />
        <Projects />
        
        <About />
        <Skills />
        <Accreditations />
        {/* <Testimonial /> */}
        <Experience />
        <HeroSection />
        {/* </BackgroundLayout> */}

        <hr />
      </div>
    </>
  );
}

export default App;
