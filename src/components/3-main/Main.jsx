import React, { useState } from "react";
import "./main.css";
import { FaLink } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { myproject } from "./myproject";
import { motion } from "framer-motion";

export default function Main() {
  const [currentactive, setcurrentactive] = useState("all");
  const [arr, setarr] = useState(myproject);

  const arryclick = (buttoncategory) => {
    setcurrentactive(buttoncategory);
    const newarr = myproject.filter((item) => {
      const zzz = item.category.find((myitem) => {
        return myitem === buttoncategory;
      });
      return zzz === buttoncategory;
    });
    setarr(newarr);
  };

  return (
    <main>
      <section className="left-section" id="projects">
        <button
          onClick={() => {
            setcurrentactive("all");
            setarr(myproject);
          }}
          className={currentactive === "all" ? "active" : null}
        >
          all project
        </button>
        <button
          onClick={() => {
            arryclick("css");
          }}
          className={currentactive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            arryclick("js");
          }}
          className={currentactive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            arryclick("react");
          }}
          className={currentactive === "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>

      <section className="right-section">
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 8, stiffness: 80 }}
              key={item.imgpath}
              className="card"
            >
              <img src={item.imgpath} alt="" />
              <h2>{item.projecttitle}</h2>
              <p>{item.p}</p>
              <div className="icons">
                <div className="icons1">
                  {/* <FaLink className="link" /> */}
                  <a
                    href="https://github.com/ahmedgamal53?tab=repositories"
                    target="_blank"
                    className="hub"
                  >
                    <FaGithub />
                  </a>
                </div>
                <a href={item.link} target="_blank" className="livedemo">
                  <FaExternalLinkAlt className="live" />
                  Live Demo
                </a>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
