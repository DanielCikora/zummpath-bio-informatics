import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FAQPage = () => {
  // Define FAQ questions and answers
  const faqs = [
    {
      question: "What is Quantumzyme's approach to bioinformatics?",
      answer:
        "Quantumzyme leverages advanced quantum computing and bioinformatics techniques to analyze complex biological data, accelerating drug discovery and innovation in personalized medicine.",
    },
    {
      question: "How does bioinformatics help in drug discovery?",
      answer:
        "Bioinformatics plays a crucial role in drug discovery by helping scientists analyze biological data, identify drug targets, and predict the efficacy of drugs, significantly reducing the time required for development.",
    },
    {
      question: "How can I contact Quantumzyme for collaboration?",
      answer:
        "For collaboration inquiries, please fill out our contact form on the Contact page, or reach out directly via email at info@quantumzyme.com. We look forward to discussing potential partnerships.",
    },
    {
      question: "What services does Quantumzyme offer?",
      answer:
        "Quantumzyme offers services in computational chemistry, quantum computing, and bioinformatics, with a focus on enabling faster and more effective drug development through cutting-edge technology.",
    },
    {
      question: "How can bioinformatics help my research project?",
      answer:
        "Bioinformatics can provide valuable insights into genetic, genomic, and proteomic data, helping you interpret results, identify patterns, and make informed decisions for your research project.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='min-h-screen bg-gradient-to-b from-offWhite to-lightGray p-8'>
      <div className='wrapper'>
        <h2 className='text-4xl font-semibold text-royalGreen text-center mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='faq-container max-w-4xl mx-auto'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='faq-item border-b border-gray-300 py-6 transition-all duration-300'
            >
              <button
                className='flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 focus:outline-none'
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className='text-lg text-gray-700 mt-4 leading-relaxed'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className='text-center mt-10 text-gray-600'>
          Have more questions? Reach out via our{" "}
          <Link to='/Contact' className='text-royalGreen underline'>
            Contact page
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQPage;
