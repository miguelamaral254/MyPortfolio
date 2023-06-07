import React from 'react';
//icons
import {SiJavascript} from 'react-icons/si'

import{BsArrowUpRight} from 'react-icons/bs'

// type animation
import { TypeAnimation } from 'react-type-animation';
// motion 
import { m, motion } from 'framer-motion';
// variants 
import { fadeIn } from '../variants'
//link
import { Link } from 'react-scroll'
// services data
/* Allow me to introduce myself. My name is Miguel, and I'm a professional currently transitioning into the field of technology. I have a solid background in web application technologies, including HTML5, CSS3, JavaScript, ReactJS, NextJS, TypeScript, and Tailwind. These skills empower me to tackle the challenges and opportunities that lie ahead in the tech industry.

I am well-versed in front-end development and possess a deep understanding of database structures like MySQL and data formats like JSON. This expertise allows me to create interactive and responsive user interfaces, ensuring an exceptional user experience.



I am driven, curious, and extremely passionate about technology. I thrive on taking on complex challenges, constantly learning new technologies, and making valuable contributions to software development projects. My dedication and insatiable thirst for knowledge will undoubtedly propel me to achieve great things in my new career in the technology industry. */
const services = [
  {
    name: 'Web Development',
    description: 'I specialize in front-end web development, utilizing technologies such as HTML5, CSS3, JavaScript, ReactJS, NextJS, TypeScript, and Tailwind. I create visually appealing and responsive websites with a seamless user interface',
    link: 'Learn more'
  },
  {
    name: 'Ux/Ui Desingn',
    description: 'I understand the importance of providing users with a delightful experience. I apply my knowledge of UX principles to design intuitive interfaces that enhance usability and accessibility.',
    link: 'Learn more'
  },
  {
    name: 'Database Management:',
    description: 'With proficiency in MySQL and experience working with JSON, I ensure efficient and secure data storage, retrieval, and management for web applications.',
    link: 'Learn more'
  },
  {
    name: 'Product Full-Stack Development:',
    description: 'As I work towards becoming a full-stack developer, I am expanding my skills to cover back-end technologies, server-side scripting, and API integrations. This holistic approach enables me to build end-to-end solutions.',
    link: 'Learn more'
  },
  {
    name: 'Future DevOps Expertiseoduct Full-Stack Development:',
    description: 'As I work towards becoming a full-stack developer, I am expanding my skills to cover back-end technologies, server-side scripting, and API integrations. This holistic approach enables me to build end-to-end solutions.',
    link: 'Learn more'
  }
]


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='
        flex
        flex-col
        lg:flex-row'>
          {/* text & image*/}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount:0.3}} 
           className='
          flex-1
          lg:bg-services
          lg:bg-bottom
          bg-no-repeat
          mix-blend-lighten
          mb-12
          lg:mb-0'>
            <h2 className='
            h2
            text-accent
            mb-6'>
            What I do
            </h2>
            <h3 className='
            h3
            max-w-[455px]
            mb-16'>
              I am well-versed in front-end development and possess understanding of database structures like MySQL and data formats like JSON. 

            </h3>
            <button className='
          btn
          btn-sm'>
            <Link
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}>
          See my work

        </Link>
              
            </button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount:0.3}} 
          className='
          flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index)=>{
                //destructure service
                const {name, description, link} = service;
                return(
                   <div className='
                   border-b
                   border-white/20h-[146px]
                   mb-[38px]
                   flex' key={index}>
                    <div className='
                    max-w-[476px]'>
                      <h4 className='
                      text-[18px]
                      tracking-wilder
                      font-primary
                      font-semibold
                      mb-0'>{name}</h4>
                      <p className='
                      font-secondary
                      leading-tight'>{description}</p>
                    </div>
                    <div className='
                    flex
                    flex-col
                    flex-1
                    items-end'>
                      <a href='#' className='
                      btn
                      w-9
                      h-9
                      mb-[42px]
                      flex
                      justify-center
                      items-center
                      '>
                      <BsArrowUpRight />
                      
                      </a>
                      <a href='#' className='
                      text-gradient
                      text-sm'>
                        {link}
                      </a>                      
                    </div>
                  </div>)
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </section>

  )
};

export default Services;
