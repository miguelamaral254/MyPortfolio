import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/inProgress.png";
import Img3 from "../assets/hyphen.png";
import Img2 from "../assets/evogym.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div
          className="
        flex
        flex-col
        lg:flex-row
        gap-x-10"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          flex
          flex-col
          gap-y-12
          mb-10
          lg:mb-0"
          >
            {/* text */}
            <div>
              <h2
                className="
              h2
              leading-tight
              text-accent"
              >
                My Latest <br />
                work
              </h2>
              <p
                className="
              max-w-sm
              mb-16"
              >
                Here is my latest projects.
                <br />
                Here are three applications, a web, mobile and desktop.
                
                Enjoy!
              </p>
              <button
                className="
              btn
              btn-sm"
              >
                <a
                  href="https://github.com/miguelamaral254?tab=repositories"
                  target="_blank"
                >
                  View all projects
                </a>
              </button>
            </div>
            {/* Img 1 */}
            <div
              className="
            group
            relative
            overflow-hidden
            border-2
            border-white/50
            rounded-xl"
            >
              {/* overlay */}
              <a href="https://github.com/miguelamaral254/supermarketsystem" target="_blank">
                <div
                  className="
                group-hover:bg-black/70
                h-full
                w-full
                absolute
                z-40
                transition-all
                duration-300"
                ></div>
              </a>
              {/* Img */}
              <img
                className="
              group-hover:scale-125
              transition-all
              duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-24
              transition-all
              duration-500
              z-50"
              >
                <span className="text-gradient">Super market system</span>
              </div>
              {/* title */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-14
              transition-all
              duration-700
              z-50"
              >
                <span
                  className="
                text-3x1
                text-white"
                >
                  An simple super market system with Java
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          flex
          flex-col
          gap-y-10"
          >
            {/* Img 2 */}
            <div
              className="
            group
            relative
            overflow-hidden
            border-2
            border-white/50
            rounded-xl"
            >
              {/* overlay */}
              <a href="https://projevogym.vercel.app" target="_blank">
                <div
                  className="
                group-hover:bg-black/70
                h-full
                w-full
                absolute
                z-40
                transition-all
                duration-300"
                ></div>
              </a>
              {/* Img */}
              <img
                className="
              group-hover:scale-125
              transition-all
              duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-24
              transition-all
              duration-500
              z-50"
              >
                <span className="text-gradient">Evo Gym</span>
              </div>
              {/* title */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-10
              transition-all
              duration-700
              z-50"
              >
                <span
                  className="
                text-3x1
                text-white"
                >
                An Fitness website made with React and Tailwind
                </span>
              </div>
            </div>
            {/* Img 3 */}
            <div
              className="
            group
            relative
            overflow-hidden
            border-2
            border-white/50
            rounded-xl"
            >
              {/* overlay */}
              <a href="https://github.com/miguelamaral254/hyphenapp" target="_blank">
                <div
                  className="
                group-hover:bg-black/70
                h-full
                w-full
                absolute
                z-40
                transition-all
                duration-300"
                ></div>
              </a>
              {/* Img */}
              <img
                className="
              group-hover:scale-125
              transition-all
              duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-24
              transition-all
              duration-500
              z-50"
              >
                <span className="text-gradient">Hyphen</span>
              </div>
              {/* title */}
              <div
                className="
              absolute
              -bottom-full
              left-12
              group-hover:bottom-8
              transition-all
              duration-700
              z-50"
              >
                <span
                  className="
                text-3x1
                text-white"
                >
                  An application with React Native and Tailwind
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
