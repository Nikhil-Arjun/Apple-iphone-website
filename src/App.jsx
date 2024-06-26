import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import "./index.css";
import Emi from "./components/Emi";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import HowItWorks2 from "./components/HowItWorks2";
import Mobilecam from "./components/Mobilecam";
import Zoom from "./components/Zoom";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Emi />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <HowItWorks2 />
      <Mobilecam />
      <Zoom />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
