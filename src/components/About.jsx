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
      mx-auto 
      p-10
      min-h-[35vh]"
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
            className="flex-1  "
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
              Hi, I'm Miguel. Is a pleasure to have you here!
            </h3>
            <p className="mb-6">
              Since I started my journey as a freelance Frontend 2 years ago, I
              have done remotely work for a few companies and eventually I
              became a Fullstack developer. Currently I continue working as a
              freelance developer and also work as technical support. I am the
              type of professional who is confident, naturally curious and
              continually works towards improve my skills.
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
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
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
                  {inView ? <CountUp start={0} end={41} duration={3} /> : null}
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
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Contact me
                </Link>
              </button>
              <div className="flex flex-wrap gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
