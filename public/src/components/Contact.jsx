import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { fadeIn } from "../variants";
//icons
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formState, handleSubmit] = useForm("mnqyyylv");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.errors.length === 0) {
      try {
        await handleSubmit(event);

        if (formState.succeeded) {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 6000);

          // Limpar os campos
          setEmail("");
          setName("");
          setMessage("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wider">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="
              flex
              text-[20px]
              gap-x-6
              max-w-max
              mx-auto
              lg:mx-0
              "
              >
                <a href="https://wa.me/5581996379353" target="_blank">
                  <FaWhatsapp />
                </a>
                <a href="https://github.com/miguelamaral254" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/miguel-augusto-8b7350217/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleFormSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            {showMessage && (
              <div className=" text-gradient mb-6">
                <span>Thanks for message! I'll be in touch soon</span>
              </div>
            )}

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="email"
              id="email"
              type="email"
              placeholder="Your email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={formState.errors}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={formState.errors}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              id="message"
              name="message"
              type="text"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={formState.errors}
            />
            <button
              className="btn btn-lg"
              type="submit"
              disabled={formState.submitting}
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
