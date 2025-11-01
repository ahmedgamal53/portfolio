import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Lottie from "lottie-react";
import contact from "../../animation/TTA Contact Us.json";
import { motion } from "framer-motion";
export default function Contact() {
  const [form, setform] = useState({
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mwpwkevz");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (form.email.includes("@")) {
      setOpen(true);
    }
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contact">
        <MdEmail className="email" />
        <span>Contact us</span>
      </div>
      <p>
        contact us for more information and Get notified when i publish
        something new.
      </p>

      <div className="flex">
        <motion.form
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div className="mini">
            <label htmlFor="email">Email Address:</label>
            <input
              value={form.email}
              onChange={(e) => {
                setform({ ...form, email: e.target.value });
              }}
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message mini">
            <label htmlFor="message">Your Message:</label>
            <textarea
              value={form.message}
              onChange={(e) => {
                setform({ ...form, message: e.target.value });
              }}
              required
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            disabled={!form.email.trim() || !form.message.trim()}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <Snackbar open={open}>
              <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                Your message has been sent successfully
              </Alert>
            </Snackbar>
          )}
        </motion.form>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="animation"
        >
          <Lottie className="contact" animationData={contact} />
        </motion.div>
      </div>
    </section>
  );
}
