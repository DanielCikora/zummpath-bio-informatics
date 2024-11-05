import { Link } from "react-router-dom";
import BenzeneImg from "../assets/images/careerImages/benzene.png";
const Careers = () => {
  return (
    <article className='careers flex flex-col justify-center md:py-0 py-16 min-h-dvh relative overflow-hidden'>
      <img
        src={BenzeneImg}
        alt='Benzene-Symbol'
        className='benzene-primary absolute top-16 md:-right-16 -right-12 h-auto w-full md:max-w-44 max-w-32 -z-[1] opacity-80'
      />
      <img
        src={BenzeneImg}
        alt='Benzene-Symbol'
        className='benzene-secondary absolute bottom-10 md:-left-16 -left-12 h-auto w-full md:max-w-44 max-w-32 -z-[1] opacity-80'
      />
      <div className='wrapper'>
        <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-royalGreen md:mb-48 mb-24'>
          Careers
        </h2>
        <div className='highlighted-info flex md:flex-row flex-col justify-center items-center gap-10 mb-12'>
          <h2 className='duration text-6xl font-bold text-mainYellow'>
            6 Months
          </h2>
          <h2 className='price text-6xl font-bold text-gray-800'>₹59,999</h2>
        </div>
        <p className='careers-para bg-[#EAEEED] md:py-10 py-4 px-4 max-w-[1200px] mx-auto md:text-xl text-lg md:font-semibold text-center rounded-xl mb-24'>
          Embark on a pathway to a career in bioinformatics with our structured,{" "}
          <strong>6-month</strong> training program. For{" "}
          <strong>₹59.999</strong>, you'll gain hands-on experience and
          specialized bioinformatics skills. Successfully completing all levels
          and passing the final assessment may lead to potential roles as
          Research Assistants at Quantumzyme, depending on performance and
          project needs.
        </p>
        <Link
          className='text-center bg-royalGreen text-offWhite text-xl font-semibold block hover:bg-gray-800 transition-all duration-200 ease-in-out md:py-2 py-3 px-12 md:max-w-fit w-full rounded-lg mx-auto'
          to='/Contact'
        >
          Contact
        </Link>
      </div>
    </article>
  );
};
export default Careers;
