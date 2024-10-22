import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "../assets/images/heroImages/dna-image.jpg";
const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      // Confirm that ScrollTrigger is enabled
      console.log("Is ScrollTrigger enabled?", ScrollTrigger.enabled);
      // Animation code
      gsap.to(".hero-image", {
        scale: 2,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className='hero relative w-full h-screen overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <img
          className='hero-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover blur-sm grayscale'
          src={HeroImage}
          alt='hero'
        />
      </div>
      <div className='wrapper'>
        <div className='hero-content relative pt-44 max-w-[800px]'>
          <h1 className='md:text-8xl text-4xl font-bold md:text-left text-center text-gray-800'>
            We are the best {""}
            <span className='text-green-700'>
              Frontend Developers in{" "}
              <span className='text-orange-700'>Zummit.</span>
            </span>
          </h1>
          <h2 className='text-3xl font-semibold md:text-left text-center'>
            (probably)
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
