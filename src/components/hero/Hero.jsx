import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "../assets/images/heroImages/dna-image.jpg";
import Scene from "./Animation/Scene";

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Confirm that ScrollTrigger is enabled
      console.log("Is ScrollTrigger enabled?", ScrollTrigger.enabled);

      // Animation code
      gsap.to(".hero-canvas", {
        scale: 1.5, // Adjust to desired scale
        transformOrigin: "center center", // Set the transformation origin
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false, // Enable this for debugging (optional)
          onUpdate: (self) => {
            // Fix issues on scroll back
            if (self.progress === 0) {
              gsap.set(".hero-canvas", { scale: 1 });
            }
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className='hero relative w-full h-screen overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <Scene />
        </div>
        <div className='wrapper'>
          <div className='hero-content relative z-50 pt-44 max-w-[800px]'>
            <h1 className='md:text-8xl mediumSmall:text-6xl text-4xl font-bold md:text-left text-center text-gray-800'>
              Transform Your Bioinformatics Aspirations Into Reality!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
