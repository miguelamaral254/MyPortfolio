import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection oberver hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
// variant
import {fadeIn} from '../variants'
//link
import { Link } from 'react-scroll'


const About = () => {

  const[ref, inView] = useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='
      container
      mx-auto'>
        <div className='
        flex
        flex-col
        gap-y-10
        lg:flex-row
        lg:items-center
        lg:gap-x-20
        lg:gap-y-0
        h-screen'>
          {/* Img */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='
          flex-1
          bg-about
          bg-contain
          bg-no-repeat
          h-[640px]
          mix-blend-lighten
          bg-top'></motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}className='flex-1'>
            <h2 className='
            h2
            text-accent'>About me.</h2>
            <h3 className='
            h3
            mb-4'> I'm a professional currently transitioning into the field of technology. I have a solid background in web application technologies</h3>
            <p className='mb-6'>
            My aspirations go beyond front-end development—I aim to become a full-stack developer and eventually specialize in DevOps. With my analytical mindset and problem-solving orientation, I am fully committed to acquiring the necessary skills and knowledge to excel in this rapidly evolving field.
            </p>
            {/* stats */}
            <div className='
            flex
            gap-x-6
            lg:gap-x-10
            mb-12'>
              <div>
                <div className='
                text-[40px]
                font-tertiary
                text-gradient
                mb-2'>
                  {/* upgrade with date time */}
                  {
                    inView ?
                    <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className='
                font-primary
                text-sm
                tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='
                text-[40px]
                font-tertiary
                text-gradient
                mb-2'>
                  {/* upgrade with date time */}
                  {
                    inView ?
                    <CountUp start={0} end={2} duration={3} /> : null}

                </div>
                <div className='
                font-primary
                text-sm
                tracking-[2px]'>
                  Projects <br/>
                  completed
                </div>
              </div>
            </div>
            <div className='
            flex
            gap-x-8
            items-center'>
            <button className='
            btn
            btn-lg'>Contact Me</button>
            <a href='#' className='
                text-gradient
                btn-link'>
              <Link
                to='work'
                activeClass='active'
                smooth={true}
                spy={true}>
                My portfolio
              </Link>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
