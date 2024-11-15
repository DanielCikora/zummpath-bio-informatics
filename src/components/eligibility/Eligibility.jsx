import CertificateImg from "../assets/images/eligibilityImages/certificate.png";
import LetterImg from "../assets/images/eligibilityImages/letter.png";
import TubeImg from "../assets/images/eligibilityImages/tube.png";
import CheckImg from "../assets/images/eligibilityImages/check.png";

const Eligibility = () => {
  return (
    <section className='eligibility pt-16'>
      <div className='wrapper'>
        <h2 className='eligibility-title text-center text-6xl font-semibold text-royalGreen'>
          Eligibility
        </h2>
        <h3 className='text-2xl text-center my-10'>
          To be eligible for our program you will need:
        </h3>
        <div className='cards'>
          <div className='primary-row flex w-full lg:flex-row flex-col-reverse justify-between'>
            <div className='bg-[#D3DCDA] w-full flex items-center gap-16 justify-between p-10 md:flex-row flex-col'>
              <img
                src={CertificateImg}
                alt='Certificate-Image'
                className='h-auto w-full max-w-40 block'
              />
              <div className='flex flex-col gap-4 mediumSmall:text-left text-center'>
                <h3 className='text-2xl font-semibold'>MSc, ME/MTech</h3>
                <p className='text-xl'>
                  In Biotechnology, Bioinformatics, Biochemistry, or Chemistry
                </p>
              </div>
            </div>
            <div className='bg-[#F2F2F2] w-full flex items-center gap-16 justify-between p-10 md:flex-row flex-col'>
              <img
                src={LetterImg}
                alt='Letter-Image'
                className='h-auto w-full max-w-40 block'
              />
              <div className='flex flex-col gap-4 mediumSmall:text-left text-center'>
                <h3 className='text-2xl font-semibold'>
                  Appropriate certificates or copies of Education
                </h3>
                <p className='text-xl'>
                  From your College/University Head of Department (HoD), if
                  applicable
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className='secondary-row flex w-full justify-between lg:flex-row flex-col'>
            <div className='bg-[#F2F2F2] w-full flex items-center gap-16 justify-between p-10 md:flex-row flex-col'>
              <img
                src={TubeImg}
                alt='Tube-Image'
                className='h-auto w-full max-w-40 block'
              />
              <div className='flex flex-col gap-4 mediumSmall:text-left text-center'>
                <h3 className='text-2xl font-semibold'>
                  On-site Participation
                </h3>
                <p className='text-xl'>
                  Engage directly with experts and projects in-person
                </p>
              </div>
            </div>
            <div className='bg-[#D3DCDA] w-full flex items-center gap-16 justify-between p-10 md:flex-row flex-col'>
              <img
                src={CheckImg}
                alt='Check-Image'
                className='h-auto w-full max-w-40 block'
              />
              <div className='flex flex-col gap-4 mediumSmall:text-left text-center'>
                <h3 className='text-2xl font-semibold'>Confirm Your Spot</h3>
                <p className='text-xl'>
                  One-time, non-refundable investment in your future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
