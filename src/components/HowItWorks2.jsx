import { howItworks2 } from "../utils";

const HowItWorks2 = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A camera that captures your <br />
            wildest imagination.
          </h2>

          <p className="hiw-subtitle">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={howItworks2}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
          </div>
          <p className="text-gray text-xl font-bold  mt-4">
            A green iguana, captured by the 48MP Main camera
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text">
              With iPhone 15 Pro, you <br />
              have multiple focal lengths <br />
              to work with. It’s like having <br />
              <span className="text-white">
                seven pro lenses in your pocket,
              </span>
              <br />
              everywhere you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks2;
