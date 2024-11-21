import { Link } from "react-router-dom";
const WhitePaper = () => {
  return (
    <section className='white-paper'>
      <div className=' text-gray-800 py-20'>
        <div className='wrapper'>
          <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-gray-800 md:mb-24 mb-16'>
            Zummpath Bioinformatics Industrial Training Program
          </h2>
          {/* Executive Summary */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Executive Summary
            </h2>
            <p className='text-xl'>
              Zummpath is a six-month, in-person bioinformatics Industrial
              Training Program conducted in Bangalore, India. Priced at{" "}
              <strong>₹59,999/- (Excl. GST)</strong>, this intensive program is
              designed to empower aspiring bioinformaticians with practical
              skills in computational biology and bioinformatics, preparing them
              for advanced roles in research and industry. The Industrial
              Training Program is brought to you by a strategic partnership
              between
              <strong> Zummit Infolabs</strong> and <strong>Quantumzyme</strong>
              , leaders in bioinformatics and computational solutions.
            </p>
          </section>
          {/* Problem Statement */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Background
            </h2>
            <p className='text-xl'>
              Bioinformatics is a rapidly evolving field with applications in
              pharmaceuticals, healthcare, and personalized medicine. Despite
              its significance, there remains a gap in practical, hands-on
              training for aspiring professionals. Many educational programs
              focus heavily on theory, leaving a need for real-world, practical
              bioinformatics skills.
            </p>
          </section>
          {/* Solution Overview */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              About the Zummpath Industrial Training Program
            </h2>
            <p className='text-xl'>
              The Zummpath Industrial Training Program aims to bridge this gap
              by providing in-depth training in bioinformatics, computational
              biology, and related technologies. Designed by industry experts
              from Zummit Infolabs and Quantumzyme, this program combines
              hands-on projects, mentorship, and exposure to real-world
              applications to equip participants with industry-relevant skills.
            </p>
          </section>
          {/* Program Benefits */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Key Benefits
            </h2>
            <ul className='list-disc pl-6 mb-4 text-xl'>
              <li>
                <strong>Industry-Relevant Skills</strong>: Practical training in
                bioinformatics and computational biology.
              </li>
              <li>
                <strong>Experienced Mentors</strong>: Learn from experts at
                Zummit Infolabs and Quantumzyme.
              </li>
              <li>
                <strong>Hands-On Projects</strong>: Work on real-world
                bioinformatics challenges.
              </li>
              <li>
                <strong>Networking Opportunities</strong>: Build connections
                with professionals in the field.
              </li>
              <li>
                <strong>In-Person Learning in Bangalore</strong>: A
                collaborative learning environment in India's tech hub.
              </li>
            </ul>
          </section>
          {/* Program Structure */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Program Structure and Curriculum
            </h2>
            <p className='text-xl'>
              The Zummpath Industrial Training Program is organized into several
              key modules covering core areas in bioinformatics, including:
            </p>
            <ul className='list-disc pl-6 mb-4 text-xl'>
              <li>Introduction to Bioinformatics and Computational Biology</li>
              <li>Data Analysis Techniques in Bioinformatics</li>
              <li>Protein Structure Analysis and Drug Discovery</li>
              <li>Genomics, Proteomics, and Systems Biology</li>
              <li>Machine Learning and AI in Bioinformatics</li>
            </ul>
            <p className='text-xl'>
              Each module includes hands-on projects, interactive sessions, and
              assessments to ensure a comprehensive understanding of both
              foundational and advanced topics.
            </p>
          </section>
          {/* Call to Action */}
          <section className='mb-8'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Ready to Start Your Journey?
            </h2>
            <p className='mb-8 text-xl'>
              Take the first step toward a rewarding career in bioinformatics
              with the Zummpath Industrial Training Program. Gain practical
              experience, work on real projects, and learn from the best in the
              industry.
            </p>
            <div className='text-center'>
              <Link
                to='/Contact'
                className='block mx-auto md:max-w-fit md:text-lg text-md mediumSmall:w-fit w-full bg-royalGreen text-offWhite py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200'
              >
                Apply Now
              </Link>
            </div>
          </section>
          {/* Contact Information */}
          <section className='mt-12'>
            <h2 className='text-3xl md:text-left text-center font-semibold text-royalGreen mb-2 mt-8'>
              Contact Us
            </h2>
            <p className='text-xl'>
              For any inquiries about the Zummpath Industrial Training Program
              Program, please reach out:
            </p>
            <ul className='list-none mt-4 text-xl'>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  className='inline-block text-royalGreen font-semibold'
                  href='mailto:Info.zummpath@zummitlabs.com'
                >
                  Info.zummpath@zummitlabs.com
                </a>
              </li>
              <li>
                <strong>Location:</strong> Bangalore, India
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
