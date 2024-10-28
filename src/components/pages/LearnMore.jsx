const LearnMore = () => {
  return (
    <article className="learn-more">
      <div className="wrapper">
        <div className="learn-more__content py-16">
          <h1 className="text-5xl font-semibold text-royalGreen">Learn More</h1>
          <div className="flex items-center py-9">
            <h2 className="text-3xl font-semibold w-[200px] pr-5">
              Program
              <br />
              Fee
            </h2>

            <h2 className="text-6xl">₹ 59,999.99</h2>
          </div>
          <div className="flex items-center py-9">
            <h2 className="text-3xl font-semibold w-[200px] pr-5">
              Program Highlights
            </h2>
            <h2 className="text-xl">
              Jumpstart your bioinformatics career with a specialized training
              program that combines knowledge, hands-on experience, and direct
              industry exposure. Our partnership with Quantumzyme offers
              participants an in-depth look into molecular simulations, enzyme
              engineering, and computational biology, culminating in a
              guaranteed six-month internship that can propel your career
              forward.
            </h2>
          </div>

          <hr className="h-2 w-full bg-royalGreen"></hr>
        </div>
      </div>
    </article>
  );
};

export default LearnMore;
