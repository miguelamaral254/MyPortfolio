import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { m, motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//link
import { Link } from "react-scroll";
// services data
const services = [
  {
    name: "Web Development",
    description:
      "I specialize in front-end web development, utilizing technologies such as HTML5, CSS3, JavaScript, ReactJS, NextJS, TypeScript, and Tailwind. I create visually appealing and responsive websites with a seamless user interface",
    link: "https://kenzie.com.br/blog/web-development/",
  },
  {
    name: "Ux/Ui Desingn",
    description:
      "I understand the importance of providing users with a delightful experience. I apply my knowledge of UX principles to design intuitive interfaces that enhance usability and accessibility.",
    link: "https://blog.cubos.academy/ux-ui-design-guia-completo/?utm_term=&utm_campaign=Conversion+-+Search+-+Software+Development+-+DSA&utm_source=google&utm_medium=cpc&hsa_acc=6320525513&hsa_cam=19497756685&hsa_grp=143656515494&hsa_ad=643994963890&hsa_src=g&hsa_tgt=aud-2024399544157:dsa-1819771512692&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AfSHDIxQYZoyVqLAq0nfbUDEjLD2YT8uUmOC9jW7P3K1Nll3DhIPQhoCu6YQAvD_BwE",
  },
  {
    name: "Product Full-Stack Development:",
    description:
      "As I work towards becoming a full-stack developer, I am expanding my skills to cover back-end technologies, server-side scripting, and API integrations. This holistic approach enables me to build end-to-end solutions.",
    link: "https://blog.gokursos.com/carreiras/tecnologia/o-que-e-desenvolvedor-full-stack/?idtag=6c5101ba-0849-49a6-82ad-b655aeb8b564&gclid=CjwKCAjw1YCkBhAOEiwA5aN4ASG1k_5pBFboLlZVmmdtFypD2Dcra5jrAzE3TxFsy-6wi3HG9RpN1RoCf9kQAvD_BwE",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div
          className="
        flex
        flex-col
        lg:flex-row"
        >
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1
          lg:bg-services
          lg:bg-bottom
          bg-no-repeat
          mix-blend-lighten
          mb-12
          lg:mb-0"
          >
            <h2
              className="
            h2
            text-accent
            mb-6"
            >
              What I do
            </h2>
            <h3
              className="
            h3
            max-w-[455px]
            mb-16"
            >
              I am well-versed in front-end development and possess
              understanding of database structures like MySQL and data formats
              like JSON.
            </h3>
            <button
              className="
          btn
          btn-sm"
            >
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                See my work
              </Link>
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="
          flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="
                   border-b
                   border-white/20h-[146px]
                   mb-[38px]
                   flex"
                    key={index}
                  >
                    <div
                      className="
                    max-w-[476px]"
                    >
                      <h4
                        className="
                      text-[18px]
                      tracking-wilder
                      font-primary
                      font-semibold
                      mb-0"
                      >
                        {name}
                      </h4>
                      <p
                        className="
                      font-secondary
                      leading-tight"
                      >
                        {description}
                      </p>
                    </div>
                    <div
                      className="
                    flex
                    flex-col
                    flex-1
                    items-end"
                    >
                      <a
                        href={link}
                        target="_blank"
                        className="
                      btn
                      w-9
                      h-9
                      mb-[42px]
                      flex
                      justify-center
                      items-center
                      "
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        target="_blank"
                        className="
                      text-gradient
                      text-sm"
                      >
                        <p>Learn More</p>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
