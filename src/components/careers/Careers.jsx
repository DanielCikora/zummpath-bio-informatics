import { Link } from "react-router-dom";
import BenzeneImg from "../assets/images/careerImages/benzene.png";

const Careers = () => {
  return (
    <article className="careers pb-32 relative overflow-hidden">
      <div className="wrapper">
        <h2 className="careers-title text-center text-6xl font-semibold text-royalGreen my-32">
          Careers
        </h2>
        <div className="careers-para bg-[#EAEEED] p-10 max-w-[1200px] mx-auto text-xl text-center rounded-xl">
          <p>
            Embark on a pathway to a career in bioinformatics with our
            structured training program.
          </p>
          <p>
            Successfully completing all levels and passing the final assessment
            can lead to potential roles as Research Assistants at Quantumzyme,
            pending satisfactory performance.
          </p>
        </div>
        <Link
          className="text-center mt-12 bg-royalGreen text-offWhite text-xl font-semibold
          block hover:bg-gray-800 transition-all duration-200 ease-in-out md:py-2 py-3 px-12 md:max-w-fit w-full rounded-lg mx-auto"
          to="/Contact"
        >
          Contact
        </Link>
      </div>
      <img
        src={BenzeneImg}
        alt="Benzene-Symbol"
        className="benzene-primary absolute bot-0 -left-[80px]"
      />
      <img
        src={BenzeneImg}
        alt="Benzene-Symbol"
        className="benzene-secondary absolute top-2/4 -right-[80px]"
      />
    </article>
  );
};

export default Careers;
