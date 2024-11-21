import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const FAQPage = () => {
  const faqs = [
    {
      question: "What is the duration of the ZummPath program?",
      answer:
        "The ZummPath program is a comprehensive 6-month training designed to equip participants with in-depth bioinformatics knowledge and hands-on skills.",
    },
    {
      question: "How can I apply to join ZummPath?",
      answer:
        "To apply, please visit our Contact page and complete the application form. Our team will review your submission and reach out with further details on next steps.",
    },
    {
      question: "What is the cost of the ZummPath program?",
      answer:
        "The full program costs ₹59,999/- (Excl. GST) rupees, which includes access to all training materials, resources, and expert mentorship throughout the duration of the course.",
    },
    {
      question:
        "Is there an opportunity for employment after completing ZummPath?",
      answer:
        "Yes, exceptional participants may be considered for research assistant roles, allowing them to apply their skills in real-world bioinformatics projects with our industry partners.",
    },
    {
      question: "What topics are covered in the ZummPath program?",
      answer:
        "ZummPath covers key bioinformatics topics, including data analysis, computational biology, and programming, with a focus on practical, industry-relevant applications.",
    },
    {
      question: "Who is ZummPath designed for?",
      answer:
        "The program is ideal for recent graduates, aspiring bioinformaticians, and professionals in related fields who want to deepen their expertise in bioinformatics.",
    },
    {
      question:
        "How does bioinformatics impact fields like drug discovery and personalized medicine?",
      answer:
        "Bioinformatics plays a vital role by helping scientists analyze complex biological data, identify potential drug targets, and understand genetic factors in disease, which accelerates progress in drug discovery and personalized healthcare.",
    },
    {
      question: "How can bioinformatics help with my research?",
      answer:
        "Bioinformatics provides tools to analyze genetic, genomic, and proteomic data, allowing you to uncover patterns, interpret complex results, and make data-driven decisions in your research.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className='min-h-screen bg-offWhite flex flex-col justify-center md:py-0 py-16'>
      <div className='wrapper'>
        <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-gray-800 md:mb-32 mb-24'>
          Frequently Asked Questions
        </h2>
        <div className='faq-container max-w-4xl mx-auto'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='faq-item border-b border-solid border-gray-300 md:py-6 py-3 transition-all duration-300 ease-in-out'
            >
              <button
                className='flex justify-between items-center w-full text-left md:text-xl mediumSmall:text-lg text-md font-semibold text-gray-800 focus:outline-none'
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`block transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className='md:text-lg mediumSmall:text-md text-sm text-gray-800 mt-4 leading-relaxed'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className='text-center mt-10 text-gray-800'>
          Have more questions? Reach out via our{" "}
          <Link to='/Contact' className='block text-royalGreen underline'>
            Contact page
          </Link>
        </p>
      </div>
    </section>
  );
};
export default FAQPage;
