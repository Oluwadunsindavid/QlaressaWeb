import { useState } from "react";
import "./App.css";
import Hero from "./Components/HomeComp/Hero";
import About from "./Components/HomeComp/About";
import Problem from "./Components/HomeComp/Problem";
import Intention from "./Components/HomeComp/Intentions";
import Stat from "./Components/HomeComp/Stat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" font-DMSans">
      <Hero />
      <About />
      <Problem />
      <Intention />
      <Stat />
    </div>
  );
}

export default App;
