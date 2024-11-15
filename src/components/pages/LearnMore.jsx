import QuantumzymeImg from "../assets/images/learnmoreimages/quantumzyme.png";
import ZummitImg from "../assets/images/learnmoreimages/Zummit.png";

const LearnMore = () => {
  return (
    <article className='learn-more'>
      <div className='wrapper'>
        <div className='learn-more__content py-16'>
          <h1 className='text-5xl font-semibold text-royalGreen text-center'>
            Learn More
          </h1>
          <div className='flex items-center'>
            <img
              src={QuantumzymeImg}
              alt='Quantumzyme-Logo-Image'
              className='h-auto w-full max-w-40 block ml-auto'
            />
          </div>

          <div className='flex items-center py-9'>
            <h2 className='text-3xl font-semibold w-[200px] pr-5'>
              Program
              <br />
              Fee
            </h2>
            <h2 className='text-6xl max-w-[1000px]'>₹ 59,999.99</h2>
            <div className='flex flex-col gap-3 ml-auto'>
              <p className='text-xl text-center'>in partenership</p>
              <img
                src={ZummitImg}
                alt='Zummit-Logo-Image'
                className='h-auto w-full max-w-40 block'
              />
            </div>
          </div>
          <hr className='h-2 w-full bg-royalGreen'></hr>
          <div className='flex items-center py-9'>
            <h2 className='text-3xl font-semibold w-[200px] pr-5'>
              Program
              <br />
              Highlights
            </h2>
            <p className='text-xl max-w-[1000px]'>
              Jumpstart your bioinformatics career with a specialized training
              program that combines knowledge, hands-on experience, and direct
              industry exposure. Our partnership with Quantumzyme offers
              participants an in-depth look into molecular simulations, enzyme
              engineering, and computational biology, culminating in a
              guaranteed six-month Industrial Training Program that can propel
              your career forward.
            </p>
          </div>
          <hr className='h-0.5 w-full bg-gray-400'></hr>
          <div className='flex items-center py-9'>
            <h2 className='text-3xl font-semibold w-[200px] pr-5'>
              Our
              <br />
              Advantages
            </h2>
            <ul className='list-disc text-xl max-w-[1000px] pl-5'>
              <li>
                Expert-Guided Learning: Learn from industry leaders and
                bioinformatics specialists who bring real-world insights and
                cutting-edge techniques.
              </li>
              <li>
                Project-Based Learning: Apply your knowledge to challenging
                projects that mirror industry needs, making you career-ready.
              </li>
              <li>
                Exclusive Industrial Training Program Opportunity: Secure a
                six-month Industrial Training Program at Quantumzyme's lab in
                Bangalore, giving you unparalleled exposure to enzyme
                engineering and research projects.
              </li>
              <li>
                Seamless Career Transition: Outstanding interns may transition
                into full-time Research Assistant roles at Quantumzyme, setting
                you up for a successful bioinformatics career.
              </li>
            </ul>
          </div>
          <hr className='h-0.5 w-full bg-gray-400'></hr>
          <div className='flex items-center py-9'>
            <h2 className='text-3xl font-semibold w-[200px] pr-5'>
              Curriculum
              <br />
              Roadmap
            </h2>
            <ul className='list-disc text-xl max-w-[1000px] pl-5'>
              <li>
                Foundation of In silico Techniques Start with core
                bioinformatics principles and basic computational skills to
                establish a strong foundation.
              </li>
              <li>
                Advanced Analysis Tools Develop your analytical abilities with
                in-depth techniques in molecular simulations and enzyme studies.
              </li>
              <li>
                Modeling for Real-World Applications Explore complex modeling
                methods to tackle real-world bioinformatics challenges.
              </li>
              <li>
                AI and Automation Master AI and machine learning applications
                for automation, giving you a tech-driven edge in bioinformatics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LearnMore;
