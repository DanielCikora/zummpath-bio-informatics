import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./program.css";
import DotsImage from "../assets/images/programImages/program-dots.png";
gsap.registerPlugin(ScrollTrigger);
const Program = () => {
  const bulbsRef = useRef([]);
  useEffect(() => {
    const circles = bulbsRef.current.map((el) =>
      el.querySelector(".outer-circle")
    );
    const numbers = bulbsRef.current.map((el) =>
      el.querySelector(".program-steps")
    );
    gsap.fromTo(
      circles,
      { backgroundColor: "#F8F8F8" }, // Initial background color
      {
        backgroundColor: "#003C2C", // Fill with royalGreen
        duration: 1,
        ease: "power2.out",
        stagger: {
          each: 1, // Sequential delay between fills
          from: "start", // Fill circles from left to right
        },
        scrollTrigger: {
          trigger: bulbsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          numbers.forEach((num, i) => {
            const circleBg = window.getComputedStyle(
              circles[i]
            ).backgroundColor;
            if (circleBg === "rgb(0, 60, 44)") {
              gsap.to(num, {
                color: "#F8F8F8",
                duration: 0.4,
                overwrite: "auto",
              });
            }
          });
        },
        onComplete: function () {
          // Ensure all numbers, especially the last one, are white at the end.
          numbers.forEach((num) => {
            gsap.to(num, { color: "white", duration: 0.2 });
          });
        },
      }
    );
  }, []);

  const programTexts = [
    {
      id: 1,
      title: "Basic In silico Concepts",
      paragraphTop: "Fundamental bioinformatics",
      paragraphBot: "Launchpad for exploration",
    },
    {
      id: 2,
      title: "Advanced In silico Techniques",
      paragraphTop: "Bioinformatics techniques",
      paragraphBot: "Enhancing your skill set",
    },
    {
      id: 3,
      title: "Advanced In silico Modeling",
      paragraphTop: "Complex modeling techniques",
      paragraphBot: "Real-world challenges",
    },
    {
      id: 4,
      title: "Automation and AI/ML",
      paragraphTop: "Mastering automation",
      paragraphBot: "Optimizing processes",
    },
  ];
  return (
    <section className='program-section md:py-0 py-20 min-h-dvh flex flex-col justify-center overflow-hidden'>
      <div className='wrapper'>
        <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-royalGreen md:mb-32 mb-24'>
          Program Structure
        </h2>
        <div className='program-content relative flex md:flex-row flex-col justify-between text-center gap-4'>
          {programTexts.map((programText, index) => (
            <div
              key={programText.id}
              className='flex flex-col items-center lg:gap-10 gap-6 lg:max-w-fit'
              ref={(el) => (bulbsRef.current[index] = el)}
            >
              <div className='circle-container relative w-[170px] h-[170px] flex items-center justify-center'>
                <div className='outer-circle absolute rounded-full w-full h-full'></div>
                <h3 className='program-steps relative z-10 text-black font-bold text-center md:text-8xl text-5xl'>
                  {programText.id}
                </h3>
              </div>

              <h3 className='font-bold md:text-2xl text-xl md:max-w-[200px] max-w-full'>
                {programText.title}
              </h3>
              <ul className='list-none lg:mb-0 mb-14'>
                <li className='md:text-xl text-lg font-semibold'>
                  {programText.paragraphTop}
                </li>
                <li className='md:text-xl text-lg font-semibold'>
                  {programText.paragraphBot}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
