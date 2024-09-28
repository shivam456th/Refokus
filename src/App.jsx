import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marqueees from "./Components/Marqueees";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Last from "./Components/Last";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900 text-white font-[satoshi_variable] w-full">
      <Nav />
      <Hero />
      <Stripes />
      <Products />
      {/* <Marqueees /> */}
      {/* <Cards /> */}
      {/* <Footer /> */}
      {/* <Last /> */}
    </div>
  );
}

export default App;
