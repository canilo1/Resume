import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // Register the hook to avoid React version discrepancies 

import NavBar from "./NavBar";

function App() {
  const boxRef = useRef(null); // Reference for the element

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,{ opacity: 0, y: -50 },{ opacity: 1, y: 0, duration: 1, ease: "power2.out" });
  }, []); // Runs only once when component mounts

  return (
    <>
      <NavBar />
      <div ref={boxRef} className="box">
        Hello, GSAP!
      </div>
    </>
  );
}

export default App;
