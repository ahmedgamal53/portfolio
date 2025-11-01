import React from "react";
import { MdVerified } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Lottie from "lottie-react";
import Programming from "../../animation/Programming Computer.json";
import "./hero.css";
import { motion } from "framer-motion";
import personal from "../../assets/photo_2025-10-11_11-57-31.jpg";
export default function Hero() {
  return (
    <section className="hero" id="about">
      <div
        // initial={{ x: -80 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1 }}
        className="left-section"
      >
        <div className="parent-avatar">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 6, type: "spring", stiffness: 20 }}
            className="avatar-img"
          >
            <img src={personal} alt="" className={"avatar"} />
          </motion.div>
          <div className="icon-verified">
            <MdVerified />
          </div>
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          Front-end developer and UI enthusiast.
        </motion.h1>
        <p className="sub-title">
          I’m Ahmed Gamal, a front-end developer focused on creating modern,
          accessible, and performance-driven websites, and responsive web
          designs
        </p>
        <div className="icons">
          <FaTwitter className="icon" />
          <IoLogoInstagram className="icon" />
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="right-section animation"
      >
        <Lottie className="Programming" animationData={Programming} />
      </motion.div>
    </section>
  );
}
