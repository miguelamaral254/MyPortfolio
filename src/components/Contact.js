import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants'


const Contact = () => {
  return (
    <section className='
    py-16
    lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='
        flex
        flex-col
        lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
           className='
           flex-1
           flex
           justify-start
           items-center'>
            <div>
              <h4 className='
              text-x1
              uppercase
              text-accent 
              font-medium 
              mb-2 
              tracking-wider'>
                Get in touch
              </h4>
              <h2 className='
              text-[45px]
              lg:text-[90px]
              leading-none
              mb-12'>
                Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
          variants={fadeIn('left',0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='
          flex-1
          border
          rounded-2xl
          flex flex-col
          gap-y-6
          pb-24
          p-6
          items-start'>
            <input className='
            bg-transparent
            border-b
            py-3
            outline-none
            w-full
            placeholder:text-white
            focus:border-accent
            transition-all'
            type='text'
            placeholder='Your email'
            />
             <input className='
            bg-transparent
            border-b
            py-3
            outline-none
            w-full
            placeholder:text-white
            focus:border-accent
            transition-all'
            type='text'
            placeholder='Your name'
            />
            <textarea className='
            bg-transparent
            border-b
            py-12
            outline-none
            w-full
            placeholder:text-white
            focus:border-accent
            transition-all 
            resize-none
            mb-12'
            placeholder='Your message'>
            </textarea>
            <button className='
            btn
            btn-lg'> send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
