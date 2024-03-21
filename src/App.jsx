import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import "./index.css";
import Emi from "./components/Emi";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Emi />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
