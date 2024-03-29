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

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
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
      </div>
    </section>
  );
};

export default zoom;
