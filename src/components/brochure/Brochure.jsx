import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CareerImage from "../assets/images/brochureImages/career.png";
import InternshipImage from "../assets/images/brochureImages/internship.png";
import SkillsImage from "../assets/images/brochureImages/skills.png";
import TrainingImage from "../assets/images/brochureImages/training.png";
const Brochure = () => {
  const brochureCardsTexts = [
    {
      id: 0,
      title: "Comprehensive Training",
      paragraph:
        "Embark on a transformative journey with our comprehensive bioinformatics training, designed to propel you into the thriving fields of molecular simulations and enzyme engineering.",
      imageSource: TrainingImage,
      imageAlt: "training",
    },
    {
      id: 1,
      title: "Cutting-Edge Skills",
      paragraph:
        "Master the latest techniques in computational biology, gaining practical, hands-on experience that enhances your expertise in bioinformatics.",
      imageSource: SkillsImage,
      imageAlt: "skills",
    },
    {
      id: 2,
      title: "Guaranteed Internship",
      paragraph:
        "Upon completion of the training, secure a six-month internship at Quantumzyme, Bangalore, a leader in enzyme engineering. Work on real-world projects and apply your newly acquired skills in a dynamic environment.",
      imageSource: InternshipImage,
      imageAlt: "internship",
    },
    {
      id: 3,
      title: "Career Pathway",
      paragraph:
        "This internship serves as a launchpad for potential full-time roles, like Research Assistant, at Quantumzyme. Take your first step toward a fulfilling career in bioinformatics.",
      imageSource: CareerImage,
      imageAlt: "career",
    },
  ];
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Store the index of the currently expanded card
  const toggleViewMore = (index) => {
    // If the clicked card is already expanded, close it, otherwise open it and close any other card
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className='brochure pt-12 pb-10'>
      <div className='wrapper'>
        <div className='brochure-content'>
          <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-royalGreen md:mb-32 mb-24'>
            What We Offer
          </h2>
          <div className='brochure-boxes flex lg:flex-row flex-col gap-5 lg:justify-between lg:items-start items-center'>
            {brochureCardsTexts.map((brochureCardsText, index) => (
              <div
                className='bg-lightGreen overflow-hidden relative cursor-pointer min-h-[500px] flex flex-col bg-opacity-60 md:text-left text-center px-6 py-10 rounded-xl text-offWhite w-full max-w-[380px]'
                key={brochureCardsText.id}
                onClick={() => toggleViewMore(index)}
              >
                <img
                  className={`absolute h-auto w-full lg:max-w-48 max-w-44 lg:top-3 top-6 -right-10 -z-[2] transition-opacity duration-500 ease-in-out ${
                    expandedCardIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                  src={brochureCardsText.imageSource}
                  alt={brochureCardsText.imageAlt}
                />
                <h3 className='text-royalGreen md:text-3xl text-center text-2xl font-semibold mt-auto mb-auto'>
                  {brochureCardsText.title}
                </h3>
                <p
                  className={`block text-black md:text-2xl text-xl overflow-hidden transition-all duration-1000 ease-in-out ${
                    expandedCardIndex === index
                      ? "max-h-[1000px] opacity-100 pb-2" // Fully visible
                      : "max-h-0 opacity-100" // Limit height for collapsed state
                  }`}
                >
                  {brochureCardsText.paragraph}
                </p>
                {expandedCardIndex === index ? (
                  <FontAwesomeIcon
                    className='block text-2xl max-w-fit font-bold rounded-full bg-royalGreen px-2.5 py-2'
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    className='block text-2xl max-w-fit font-bold rounded-full bg-royalGreen px-2.5 py-2'
                    icon={faPlus}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
