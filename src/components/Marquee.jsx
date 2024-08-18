import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 gap-10 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10 }} className='text-[27vw] leading-none font-["FoundersGrotesk-Semibold"] uppercase -mt-[3vw] font-semibold'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10 }} className='text-[27vw] leading-none font-["FoundersGrotesk-Semibold"] uppercase -mt-[3vw] font-semibold'>we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee