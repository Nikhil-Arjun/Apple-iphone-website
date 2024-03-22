import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Emi = () => {
  useGSAP(() => {
    gsap.to("#Emi", {
      opacity: 1,
      delay: 5,
    });
  }, []);

  return (
    <div
      id="Emi"
      className="h-12 bg-gray-950 text-white px-4 flex items-center justify-center text-center text-lg md:text-base cursor-pointer">
      <p className="font-sans">
        Save ₹6000.00 instantly on iPhone 15 Pro with HDFC Bank Credit Cards.
        Plus No Cost EMI from most leading banks.{" "}
        <button className="text-blue underline">
          <a href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro">
            Buy
          </a>
        </button>
      </p>
    </div>
  );
};

export default Emi;