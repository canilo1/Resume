import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// Ensure you import the TextPlugin
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
function RandomColorGenerator() {
    let color;
    do {
        color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } while (color === "rgb(0, 0, 0)");
    return color;
}

function Introduction() {
    const headingRef = useRef(null);
    const SpanInfo = useRef(null);

    function TypeArray(Text) {
        return Text.split(" ");
    }

    useGSAP(() => {
        gsap.to(headingRef.current, { 
            color: () => RandomColorGenerator(),
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Splitting the text into words and inserting them into spans
        const words = TypeArray("I'm a passionate software engineering undergraduate with experience in React and full-stack development, focused on solving complex problems and helping others break into tech.");
        
        SpanInfo.current.innerHTML = "";
        words.forEach((word) => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            SpanInfo.current.appendChild(span);
        });

        // Animate each word with stagger effect, opacity, scale, and y position
        gsap.fromTo(
            SpanInfo.current.querySelectorAll("span"),
            {
                 // Start from a smaller scale
                 fontSize:20,
               
                 opacity:0,
                 y:-50
            },
            {
                color: () => RandomColorGenerator(),
                fontSize: 40,
                opacity: 1, 
                y:0,
                scale: 20,  // Grow to normal size
                duration: 1,
                stagger: 0.1,  // Stagger animation for each word
                ease: "power1.out",  // Smooth easing
                repeat:-1
            }
        );
    }, []);

    return (
        <div id="ContainerHomeBar">
            <h1 ref={headingRef} id="HeadingTitle" className="HomePageText">
                Hello, My Name is John Gutierrez
            </h1>
            <div id="Information" className="HomePageText" ref={SpanInfo}>
                {/* The text will be dynamically inserted here */}
            </div>
        </div>
    );
}

export default Introduction;
