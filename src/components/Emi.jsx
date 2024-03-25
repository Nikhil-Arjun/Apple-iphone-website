import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Emi = () => {
  useGSAP(() => {
    gsap.to("#emi", {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <div className="hidden md:block">
      <div
        id="emi"
        className="h-10 bg-gray-800 text-white flex items-center justify-center text-center text-lg md:text-base cursor-pointer">
        <p className="font-sans ">
          Save ₹6000.00 instantly on iPhone 15 Pro with HDFC Bank Credit Cards.
          Plus No Cost EMI from most leading banks.{" "}
          <button className="text-blue underline">
            <a href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro">
              Buy
            </a>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Emi;
