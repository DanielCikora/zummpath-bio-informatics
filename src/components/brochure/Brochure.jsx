import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Brochure = () => {
  const brochureCardsTexts = [
    {
      id: 0,
      title: "Comprehensive Training",
      paragraph:
        "Embark on a transformative journey with our comprehensive bioinformatics training, designed to propel you into the thriving fields of molecular simulations and enzyme engineering.",
    },
    {
      id: 1,
      title: "Cutting-Edge Skills",
      paragraph:
        "Master the latest techniques in computational biology, gaining practical, hands-on experience that enhances your expertise in bioinformatics.",
    },
    {
      id: 2,
      title: "Guaranteed Internship",
      paragraph:
        "Upon completion of the training, secure a six-month internship at Quantumzyme, Bangalore, a leader in enzyme engineering. Work on real-world projects and apply your newly acquired skills in a dynamic environment.",
    },
    {
      id: 3,
      title: "Career Pathway",
      paragraph:
        "This internship serves as a launchpad for potential full-time roles, like Research Assistant, at Quantumzyme. Take your first step toward a fulfilling career in bioinformatics.",
    },
  ];

  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Store the index of the currently expanded card

  const toggleViewMore = (index) => {
    // If the clicked card is already expanded, close it, otherwise open it and close any other card
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className='brochure pt-8 pb-10'>
      <div className='wrapper'>
        <div className='brochure-content'>
          <h2 className='md:text-6xl mediumSmall:text-4xl text-2xl font-semibold text-center text-royalGreen mb-32'>
            What we offer
          </h2>
          <div className='brochure-boxes flex md:flex-row flex-col gap-5 justify-between'>
            {brochureCardsTexts.map((brochureCardsText, index) => (
              <div
                className='bg-lightGreen cursor-pointer min-h-[500px] flex flex-col justify-between bg-opacity-60 md:text-left text-center px-6 py-10 rounded-xl text-offWhite w-full max-w-[380px]'
                key={brochureCardsText.id}
                onClick={() => toggleViewMore(index)}
              >
                <h3 className='text-royalGreen md:text-3xl text-2xl font-semibold'>
                  {brochureCardsText.title}
                </h3>
                <div className='overflow-hidden'>
                  <p
                    className={`block text-black md:text-2xl text-xl transition-all duration-500 ease-in-out ${
                      expandedCardIndex === index
                        ? "max-h-[400px] opacity-100" // Fully visible
                        : "max-h-[100px] opacity-100" // Limit height for collapsed state
                    }`}
                  >
                    {expandedCardIndex === index
                      ? brochureCardsText.paragraph
                      : `${brochureCardsText.paragraph.slice(0, 50)}...`}
                  </p>
                </div>
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
