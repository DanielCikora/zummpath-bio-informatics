import "./program.css";
import DotsImage from "../assets/images/programImages/program-dots.png";

const Program = () => {
  const programTexts = [
    {
      id: 1,
      title: "Basic Insilico Concepts",
      paragraphTop: "Fundamental bioinformatics",
      paragraphBot: "Launchpad for exploration",
    },
    {
      id: 2,
      title: "Advanced Insilico Techniques",
      paragraphTop: "Bioinformatics techniques",
      paragraphBot: "Enhancing your skill set",
    },
    {
      id: 3,
      title: "Advanced Insilico Modeling",
      paragraphTop: "Complex modeling techniques",
      paragraphBot: "Real-world challenges",
    },
    {
      id: 4,
      title: "Automation and AI/ML",
      paragraphTop: "Mastering automation",
      paragraphBot: "Optimizing processes",
    },
  ];

  return (
    <section className='program-section py-20'>
      <div className='wrapper'>
        <h2 className='md:text-6xl mediumSmall:text-4xl text-2xl font-semibold text-center text-royalGreen mb-32'>
          Program Structure
        </h2>
        <div className='program-content relative flex md:flex-row flex-col justify-between text-center gap-4'>
          {programTexts.map((programText, index) => (
            <div
              key={programText.id}
              className='flex flex-col items-center lg:gap-10 gap-6 lg:max-w-fit'
            >
              <div className='program-dots relative h-full w-full mb-10'>
                <h3 className='program-steps w-fit relative font-bold text-center md:text-8xl text-5xl rounded-full'>
                  {programText.id}
                </h3>
                {index < programTexts.length - 1 && (
                  <img
                    className='absolute mediumLarge:block hidden top-[50%] -translate-y-[50%] -z-[3] left-[90%]'
                    src={DotsImage}
                    alt='dots'
                  />
                )}
              </div>
              <h3 className='font-bold md:text-2xl text-xl md:max-w-[200px] max-w-full'>
                {programText.title}
              </h3>
              <ul className='list-none lg:mb-0 mb-14'>
                <li className='md:text-xl text-lg font-semibold'>
                  {programText.paragraphTop}
                </li>
                <li className='md:text-xl text-lg font-semibold'>
                  {programText.paragraphBot}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
