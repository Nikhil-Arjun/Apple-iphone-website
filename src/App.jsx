import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import "./index.css";
import Emi from "./components/Emi";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Emi />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
