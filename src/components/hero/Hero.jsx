import Scene from "./Animation/Scene";
import { Link } from "react-router-dom";
import ZummpathLogoImage from "../assets/images/heroImages/zummpath-logo.png";
const Hero = () => {
  return (
    <section className='hero relative w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full overflow-hidden hero-canvas'>
        <Scene />
      </div>
      <div className='wrapper h-full top-0 left-[50%] -translate-x-[50%] z-30 absolute'>
        <div className='hero-content md:items-start items-center w-full md:justify-center md:pt-0 pt-20 h-full flex flex-col md:gap-12 gap-10'>
          <img
            src={ZummpathLogoImage}
            alt='zummpath-logo'
            className='block h-auto w-full md:max-w-[500px] max-w-[400px]'
          />
          <h2 className='md:text-4xl mediumSmall:text-3xl text-2xl font-medium md:text-left text-center text-gray-800 md:max-w-96 max-w-full'>
            Bioinformatics Industrial Training in 6 Months
          </h2>
          <div className='flex gap-4 md:flex-row flex-col w-full text-center'>
            <Link
              className='block bg-royalGreen border-royalGreen hover:bg-gray-800 transition-all duration-200 ease-in-out md:py-2 py-3 px-4 md:max-w-fit w-full rounded-lg text-xl text-offWhite font-semibold'
              to='/Contact'
            >
              Apply Now
            </Link>
            <Link
              className='block border-2 border-solid border-royalGreen bg-offWhite hover:bg-royalGreen hover:text-offWhite transition-all duration-200 ease-in-out md:py-1.5 py-2.5 px-4 md:max-w-fit w-full rounded-lg text-xl text-black font-semibold'
              to='/Faq'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
