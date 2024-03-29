import { useRef } from "react";
import { frameImg, zoomVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const zoom = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#zoom", {
      scrollTrigger: {
        trigger: "#zoom",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 id="zoom" className="hiw-title">
            120 mm of <br />
            pure Pro zoom.
          </h2>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10 "
              />
            </div>

            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                autoPlay
                muted
                loop
                ref={videoRef}>
                <source src={zoomVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="hiw-text-container">
          <div
            className="flex flex-1 justify-center items-center
flex-col gap-5 py-10">
            <p className="hiw-text">
              For iPhone 15 Pro Max, we <br />
              designed a 5x Telephoto camera <br />
              with{" "}
              <span className="text-white">
                the longest optical zoom of <br /> any iPhone ever
              </span>
              to fit in our <br />
              compact Pro camera system.
            </p>

            <p className="hiw-text">
              Now you can{" "}
              <span className="text-white">
                {" "}
                take sharper <br />
                close‑ups from farther away
              </span>
              — like <br /> a phenomenal photo of your friend <br />
              or a goal in your kid’s <br />
              soccer match.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center flex-col">
            <p className="hiw-bigtext">5x optical zoom</p>
            <p className="hiw-text">with the 120 mm lens</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default zoom;
