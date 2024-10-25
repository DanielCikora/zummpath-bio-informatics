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
          {programTexts.map((programText) => (
            <div
              key={programText.id}
              className='flex flex-col items-center gap-6 w-full'
            >
              <div>
                <h3 className='font-bold text-center w-fit md:text-7xl text-5xl bg-royalGreen text-white md:px-16 px-12 md:py-12 py-9 rounded-full'>
                  {programText.id}
                </h3>
              </div>
              <h3 className='font-bold md:text-2xl text-xl md:max-w-[200px] max-w-full'>
                {programText.title}
              </h3>
              <ul className='list-none'>
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
