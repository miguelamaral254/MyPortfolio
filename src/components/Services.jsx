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

const services = [
  {
    name: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium a ratione minima, aliquid dignissimos ea ducimus eum corporis',
    link: 'Learn more'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium a ratione minima, aliquid dignissimos ea ducimus eum corporis',
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium a ratione minima, aliquid dignissimos ea ducimus eum corporis',
    link: 'Learn more'
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium a ratione minima, aliquid dignissimos ea ducimus eum corporis',
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
              I'm a Freelance Front-end developer with over 5 years of experience.
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
                      text-[20px]
                      tracking-wilder
                      font-primary
                      font-semibold
                      mb-6'>{name}</h4>
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
