import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Animation/Scene";
import { Link } from "react-router-dom";
const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      // Animation code
      gsap.to(".hero-canvas", {
        scale: 1.2, // Scale to 1.2x when scrolling down
        transformOrigin: "center center", // Set the transformation origin
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false, // Enable markers for debugging if needed
        },
      });
    }
  }, []);
  return (
    <>
      <section className='hero relative w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full overflow-hidden hero-canvas'>
          <Scene />
        </div>
        <div className='wrapper h-full top-0 left-[50%] -translate-x-[50%] z-30 absolute'>
          <div className='hero-content md:px-20 md:items-start items-center w-full md:justify-center md:pt-0 pt-14 h-full flex flex-col gap-4'>
            <h1 className='md:text-8xl mediumSmall:text-6xl text-5xl font-semibold md:text-left text-center text-gray-800'>
              Quantumzyme
            </h1>
            <h2 className='md:text-4xl mediumSmall:text-3xl text-2xl font-medium md:text-left text-center text-gray-800'>
              Turn Your Bioinformatics Dreams Into Reality!
            </h2>
            <div className='flex gap-2 md:flex-row flex-col w-full text-center'>
              <Link
                className='block bg-royalGreen border-royalGreen hover:bg-green-900 transition-all duration-200 ease-in-out py-2 px-4 md:max-w-fit w-full rounded-lg text-xl text-offWhite font-semibold'
                to='/'
              >
                Apply Now
              </Link>
              <Link
                className='block border-2 border-solid border-royalGreen bg-offWhite hover:bg-royalGreen hover:text-offWhite transition-all duration-200 ease-in-out py-1.5 px-4 md:max-w-fit w-full rounded-lg text-xl text-black font-semibold'
                to='/'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
