import { mobileImg } from "../utils";

const Mobilecam = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div
          className="flex flex-row justify-center
         items-center gap-10">
          <img src={mobileImg} alt="mobile image" />

          <div className="hiw-text-container">
            <div className="flex-1 flex justify-center flex-col gap-10">
              <p className="hiw-text p-45 ">
                The 48MP Main camera is more <br />
                advanced than ever, capturing <br />
                super‑high‑resolution photos with <br />a{" "}
                <span className="text-white">
                  new level of detail and colour
                </span>
                .
              </p>

              <p className="hiw-text">
                You’ll see the improvements in <br />
                your portraits. And now you no <br />
                longer have to switch to <br /> Portrait mode. If your subject{" "}
                <br />
                is a person, dog or cat, iPhone <br />
                automatically captures depthbreak <br />
                information. So you can <br /> choose to instantly{" "}
                <span className="text-white">
                  see your <br /> photo as a portrait,
                </span>{" "}
                with an artful <br /> blur effect. Or later in the <br /> Photos
                app.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 my-20 h-[1px] w-full" />

        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          Shoot magical spatial videos, <br /> then relive them on Apple Vision
          Pro
        </h4>
      </div>
    </section>
  );
};

export default Mobilecam;
