import { Link } from "react-router-dom";
import BenzeneImg from "../assets/images/careerImages/benzene.png";
const Careers = () => {
  return (
    <article className='careers py-16 relative overflow-hidden'>
      <img
        src={BenzeneImg}
        alt='Benzene-Symbol'
        className='benzene-primary absolute top-0 md:-right-16 -right-12 h-auto w-full md:max-w-44 max-w-32 -z-[1] opacity-80'
      />
      <img
        src={BenzeneImg}
        alt='Benzene-Symbol'
        className='benzene-secondary absolute bottom-0 md:-left-16 -left-12 h-auto w-full md:max-w-44 max-w-32 -z-[1] opacity-80'
      />
      <div className='wrapper'>
        <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-royalGreen md:mb-32 mb-24'>
          Careers
        </h2>
        <div className='careers-para bg-[#EAEEED] md:py-10 py-4 px-4 max-w-[1200px] mx-auto md:text-xl text-lg md:font-semibold text-center rounded-xl'>
          <p>
            Embark on a pathway to a career in bioinformatics with our
            structured training program. Successfully completing all levels and
            passing the final assessment can lead to potential roles as Research
            Assistants at Quantumzyme, pending satisfactory performance.
          </p>
        </div>
        <Link
          className='text-center mt-12 bg-royalGreen text-offWhite text-xl font-semibold
          block hover:bg-gray-800 transition-all duration-200 ease-in-out md:py-2 py-3 px-12 md:max-w-fit w-full rounded-lg mx-auto'
          to='/Contact'
        >
          Contact
        </Link>
      </div>
    </article>
  );
};

export default Careers;
