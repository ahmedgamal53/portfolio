import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [up, setup] = useState(false);
  useEffect(() => {
    // const scroll = () => {
    //   if (window.scrollY > 300) {
    //     setup(true);
    //   } else {
    //     setup(false);
    //   }
    // };
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setup(true);
      } else {
        setup(false);
      }
    });
    // return () => {
    //   window.addEventListener("scroll", scroll);
    // };
  });

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <button
        // style={{ opacity: up ? 1 : 0, transition: "1s" }}
        className={`up ${up ? "block" : "hidden"} `}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
export default App;
