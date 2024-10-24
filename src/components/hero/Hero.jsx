import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Animation/Scene";
const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      // Animation code
      gsap.to(".hero-content", {
        scale: 1.2, // Adjust to desired scale
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
        <div className='wrapper h-full'>
          <div className='hero-content px-20 justify-center h-full flex flex-col gap-10 relative z-30'>
            <h1 className='md:text-8xl mediumSmall:text-6xl text-4xl font-semibold md:text-left text-center text-gray-800'>
              Quantumzyme
            </h1>
            <h2 className='md:text-4xl mediumSmall:text-3xl text-2xl font-medium md:text-left text-center text-gray-800'>
              Turn Your Bioinformatics Dreams Into Reality!
            </h2>
            <a
              className='block bg-royalGreen py-2 px-4 max-w-fit rounded-lg text-xl text-offWhite font-semibold'
              href='/'
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
