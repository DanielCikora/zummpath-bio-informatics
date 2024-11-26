import QuantumzymeImg from "../assets/images/learnmoreimages/quantumzyme.png";
import ZummitImg from "../assets/images/learnmoreimages/Zummit.png";

const LearnMore = () => {
  const content = [
    {
      type: "text",
      title: "Program Fee",
      paragraphPrice: "₹59,999/- (Excl. GST)",
      quantumImage: QuantumzymeImg,
      quantumAlt: "Quantumzyme Logo",
      zummitImage: ZummitImg,
      zummitAlt: "Zummit Logo",
    },
    {
      type: "text",
      title: "Program Highlights",
      paragraph:
        "Jumpstart your bioinformatics career with a specialized training program that combines knowledge, hands-on experience, and direct industry exposure. Our partnership with Quantumzyme offers participants an in-depth look into molecular simulations, enzyme engineering, and computational biology, culminating in a guaranteed six-month Industrial Training Program that can propel your career forward.",
    },
    {
      type: "list",
      title: "Our Advantages",
      listItems: [
        "Expert-Guided Learning: Learn from industry leaders and bioinformatics specialists who bring real-world insights and cutting-edge techniques.",
        "Project-Based Learning: Apply your knowledge to challenging projects that mirror industry needs, making you career-ready.",
        "Exclusive Industrial Training Program Opportunity: Secure a six-month Industrial Training Program at Quantumzyme's lab in Bangalore, giving you unparalleled exposure to enzyme engineering and research projects.",
        "Seamless Career Transition: Outstanding interns may transition into full-time Research Assistant roles at Quantumzyme, setting you up for a successful bioinformatics career.",
      ],
    },
    {
      type: "list",
      title: "Curriculum Roadmap",
      listItems: [
        "Foundation of Insilico Techniques: Start with core bioinformatics principles and basic computational skills to establish a strong foundation.",
        "Advanced Analysis Tools: Develop your analytical abilities with in-depth techniques in molecular simulations and enzyme studies.",
        "Modeling for Real-World Applications: Explore complex modeling methods to tackle real-world bioinformatics challenges.",
        "AI and Automation: Master AI and machine learning applications for automation, giving you a tech-driven edge in bioinformatics.",
      ],
    },
  ];

  return (
    <section className='learn-more pt-20'>
      <div className='min-h-dvh'>
        <div className='wrapper'>
          <h1 className='md:text-5xl text-4xl font-bold text-center text-gray-800 mb-20'>
            Learn More
          </h1>
          {content.map((section, index) => (
            <section key={index} className='content-section mb-8'>
              <div className='flex flex-row justify-between items-start'>
                <div className='flex-1 self-end text-gray-800'>
                  <h2 className='md:text-3xl text-2xl font-semibold'>
                    {section.title}
                  </h2>
                  <h2 className='md:text-4xl text-xl font-semibold'>
                    {section.paragraphPrice}
                  </h2>
                  {section.type === "text" && (
                    <>
                      <p className='md:text-xl text-lg mb-6'>
                        {section.paragraph}
                      </p>
                      <hr className='h-1 w-full bg-royalGreen rounded-lg' />
                    </>
                  )}
                  {section.type === "list" && (
                    <>
                      <ul className='list-disc pl-6 mb-6'>
                        {section.listItems.map((item, liIndex) => (
                          <li className='md:text-xl text-lg' key={liIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <hr className='h-1 w-full bg-royalGreen rounded-lg' />
                    </>
                  )}
                </div>
                {(section.quantumImage || section.zummitImage) && (
                  <div className='pl-4 md:block hidden'>
                    <figure className='logo-container flex flex-col gap-2'>
                      {section.zummitImage && (
                        <img
                          src={section.zummitImage}
                          alt={section.zummitAlt}
                          className='logo-image w-full h-auto max-w-32'
                        />
                      )}
                      <figcaption className='text-center md:text-xl text-lg font-semibold text-gray-800'>
                        In <strong>partnership</strong>
                      </figcaption>
                      {section.quantumImage && (
                        <img
                          src={section.quantumImage}
                          alt={section.quantumAlt}
                          className='logo-image w-full h-auto max-w-32'
                        />
                      )}
                    </figure>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
