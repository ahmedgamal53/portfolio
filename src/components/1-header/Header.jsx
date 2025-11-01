import React, { useEffect, useState } from "react";
import "./header.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showmodal, setshowmodal] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, settheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  const togglemenu = () => {
    setshowmodal(!showmodal);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <header className="flex" id="home">
      <div>
        <button onClick={togglemenu} className="menu">
          <FaBars />
        </button>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          const newtheme = theme === "dark" ? "light" : "dark";

          localStorage.setItem("currentmode", newtheme);
          settheme(newtheme);
        }}
        className="moon"
      >
        {theme === "dark" ? (
          <IoMoonOutline />
        ) : (
          <MdOutlineWbSunny style={{ color: "orange" }} />
        )}
      </button>

      <div
        onClick={() => {
          setshowmodal(false);
        }}
        className={`${showmodal ? "fixed" : "hidden"}`}
      >
        <ul
          onClick={(e) => {
            e.stopPropagation();

            const clicked = e.target instanceof Element ? e.target : null;
            if (clicked && clicked.closest("a")) {
              setshowmodal(false);
            }
          }}
          className="modal"
        >
          <li>
            <button
              onClick={() => {
                setshowmodal(false);
              }}
            >
              <FaXmark className="clear" />
            </button>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a className="last" href="#contact">
              Contact
            </a>
          </li>
          {/* <li>
            <a className="last" href="">
              Uses
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
