import "./index.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HandWave from "./assets/HandWave.png"; 
import Sword from "./assets/Sword.png";
import Paper from "./assets/Paper.png";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const NavBarContain = useRef(null);
  const [Hovered, setHovered] = useState(null); 
  const HandObject = useRef(null); 
  const SwordObject = useRef(null); 
  const PaperImage = useRef(null); 

  useGSAP(() => {
    if (Hovered === "#ContactBar") {
      // Apply the hand wave animation only when #ContactBar is hovered
      gsap.to(HandObject.current, { rotation: -20, duration: 0.9, repeat: -1, yoyo: true });
      gsap.to("#ContactBar", { scale: 1.5, duration: 0.3 }); // Scale the heading
    } else if (Hovered === "#MyExperienceBar") {
      // Apply the sword animation only when #MyExperienceBar is hovered
      gsap.to(SwordObject.current, { y: 30, duration: 0.1 });
      gsap.to("#MyExperienceBar", { scale: 1.5, duration: 0.3 }); // Scale the heading
    } else if (Hovered === "#BlogBar") {
      // Apply the paper animation only when #BlogBar is hovered
      gsap.to(PaperImage.current, { rotation: -20, duration: 0.9 });
      gsap.to("#BlogBar", { scale: 1.5, duration: 0.3 }); // Scale the heading
    } else if (Hovered === "#JourneyBar") {
      // Scale the heading only when #JourneyBar is hovered
      gsap.to("#JourneyBar", { scale: 1.5, duration: 0.3 });
    } else {
      // Reset all animations when no element is hovered
      gsap.to(".NavHeadings", { scale: 1, duration: 0.3 });
      gsap.to(SwordObject.current, { y: 0, duration: 0.1 });
      gsap.to(HandObject.current, { rotation: 0, duration: 0.9 });
      gsap.to(PaperImage.current, { rotation: 0, duration: 0.9 });
    }
  }, [Hovered]); 

  return (
    <>
      <div id="NavBar" ref={NavBarContain}>
        <h1
          id="JourneyBar"
          className="NavHeadings"
          onMouseEnter={() => setHovered("#JourneyBar")} 
          onMouseLeave={() => setHovered(null)} 
        >
          My Journey
        </h1>
        <h1
          id="MyExperienceBar"
          className="NavHeadings"
          onMouseEnter={() => setHovered("#MyExperienceBar")} 
          onMouseLeave={() => setHovered(null)}
        >
          <img src={Sword} id="Sword" ref={SwordObject} alt="Sword" />
          My Experience
        </h1>
        <section className="ProjectContainer">
            <ul>
              <button className="Projects">
                Project1
              </button>
              <button className="Projects">
                Project2
              </button>
              <button className="Projects">
                Project 3
              </button>
              <button lassName="Projects">
                Project 3
              </button>
            </ul>
          </section>
        <h1
          id="BlogBar"
          className="NavHeadings"
          onMouseEnter={() => setHovered("#BlogBar")} 
          onMouseLeave={() => setHovered(null)} 
        >
          <img src={Paper} ref={PaperImage} id="PaperImage" className="NavHeadings" alt="Paper" />
          Blog
        </h1>
        <h1
          id="ContactBar"
          className="NavHeadings"
          onMouseEnter={() => setHovered("#ContactBar")} // Set hover to the current element
          onMouseLeave={() => setHovered(null)} // Reset hover when mouse leaves
        >
          <img
            src={HandWave}
            id="ContactImage"
            alt="Hand Wave"
            className="NavHeadings"
            ref={HandObject} // Ref for the hand image
          />
          Contact Me
        </h1>
      </div>
    </>
  );
};

export default NavBar;