import React from "react";
// countup
import CountUp from "react-countup";
// intersection oberver hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
//link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div
        className="
      container
      mx-auto"
      >
        <div
          className="
        flex
        flex-col
        gap-y-10
        lg:flex-row
        lg:items-center
        lg:gap-x-20
        lg:gap-y-0
        h-screen"
        >
          {/* Img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          bg-about
          bg-contain
          bg-no-repeat
          h-[640px]
          mix-blend-lighten
          bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2
              className="
            h2
            text-accent"
            >
              About me.
            </h2>
            <h3
              className="
            h3
            mb-4"
            >
              {" "}
              I am a passionate Full Stack developer with expertise in Web
              applications.
            </h3>
            <p className="mb-6">
            I specialize in web development, creating dynamic interfaces and excelling in both front-end and back-end work. With a focus on efficient design, I'm committed to delivering top-notch products through continuous skill enhancement.
            </p>
            {/* stats */}
            <div
              className="
            flex
            gap-x-6
            lg:gap-x-10
            mb-12"
            >
              <div>
                <div
                  className="
                text-[40px]
                font-tertiary
                text-gradient
                mb-2"
                >
                  {/* upgrade with date time */}
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div
                  className="
                font-primary
                text-sm
                tracking-[2px]"
                >
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div
                  className="
                text-[40px]
                font-tertiary
                text-gradient
                mb-2"
                >
                  {/* upgrade with date time */}
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div
                  className="
                font-primary
                text-sm
                tracking-[2px]"
                >
                  Projects <br />
                  completed
                </div>
              </div>
            </div>
            <div
              className="
            flex
            gap-x-8
            items-center"
            >
              <button
                className="
            btn
            btn-lg"
              >
                Contact Me
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
