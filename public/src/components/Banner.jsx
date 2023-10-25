import React from "react";
//images
import Image from "../assets/eu.png";
//link
import { Link } from "react-scroll";

//icons
import { FaGithub, FaWhatsapp, FaLinkedin, FaFileDownload, FaPlayCircle } from "react-icons/fa";

// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="
    min-h-[85vh]
    lag:min-h-[78vh]
    flex
    items-center"
      id="home"
    >
      <div
        className="
      container
      mx-auto"
      >
        <div
          className="
        flex
        flex-col
        gap-y-8
        lg:flex-row
        lg:items-center
        lg:gap-x-12"
        >
          {/* text */}
          <div
            className="
          flex-1
          text-center
          font-secondary
          lg:text-left"
          >
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
            text-[55px]
            font-bold
            leading-[0.8]
            lg:text-[110px]"
            >
              Miguel <span>Amaral</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              mb-6
              text-[36px]
              lg:text-[60px]
              font-secondary
              font-semibold
              uppercase
              leading-[1]"
            >
              <span
                className="
                text-white
                mr-4"
              >
                I am a
              </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="
                text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              mb-8
              max-w-lg
              mx-auto
              lg:mx-0"
            ></motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
              flex
              max-w-max
              gap-x-6
              items-center
              mb-12
              mx-auto
              lg:mx-0"
            >
              <button
                className="
                btn
                btn-lg"
              >
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Contact me
                </Link>
              </button>
              <a
                href="#"
                className="
                text-gradient
                btn-link"
              >
                <Link to="work" activeClass="active" smooth={true} spy={true}>
                  My portfolio
                </Link>
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.6)}
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
              <a href="https://wa.me/5581996379353" target="blank">
                <FaWhatsapp />
              </a>
              <a href="https://github.com/miguelamaral254" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-augusto-8b7350217/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://drive.google.com/file/d/15s8XWAx4aBz29q-Nwd2doNXl6rzBnqou/view?usp=sharing"
                target="blank"
              >
                <FaFileDownload />
              </a>
              <a 
              href="https://drive.google.com/file/d/1TyL5A_OUHgeUPHUTi-U8SeYjOH_jk4_d/view?usp=drive_link"
              target="blank"
              >
              <FaPlayCircle/>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="
          hidden
          lg:flex
          w-[600px]
          h-[500px]
          flex-1
          max-w-[320px]
          lg:max-w-[482px]
          "
          >
            <img src={Image} alt="Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
