'use client'

import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import * as motion from "motion/react-client"
const Hero = () => {
  return (
    
    <div className='hero relative bg-[url(/Assets/backImage.png)] h-[1000px] bg-no-repeat bg-[center_top_-10rem] bg-cover'>
       <div className='relative ml-auto mr-auto max-w-[1300px] h-full'>
        <div className='text-center'>
            <h1 className='ml-auto mr-auto pt-12 max-w-[1000px] font-bold text-6xl text-[#DBC2FF] leading-[67px]'> High Value Project Finance From Government Banks</h1>
            <p className='ml-auto mr-auto mt-6 text-[#DBC2FF] tracking-wide max-w-[900px]'>
            Get ₹10Cr+ project funding from banks and investors. 
            We arrange LCs & BGs for ₹10Cr+ import-export deals and ₹1Cr+ without property via international banks. 
            Based in Lucknow, serving PAN India
            </p>
            <Button as={Link} className='mt-8 bg-[#FFEB00] text-[#1E014C] rounded-full font-bold h-14 w-56 text-base' href="#" variant="flat">
                Start Your Search <ArrowUpRight />
            </Button>
        </div>
        {/* <motion.div initial={{translateY:100}} whileInView={{translateY:0}} viewport={{amount:"some",once:true}} transition={{duration:1}}> */}
        <div className='absolute top-[70%] left-0 bg-[#250556] w-[400px] p-10 rounded-lg  border-[#250556] backdrop-blur-md bg-opacity-30 text-[#DBC2FF] text-sm'>
          <p>- We specialize in securing high-value project funding (₹10Cr+) through government banks and private equity investors.</p>
          <br/>
          <p>- Our expertise spans industries like hospitality, healthcare, energy, agriculture, real estate, education, and manufacturing.</p>
        </div>
       

        {/* <motion.div initial={{translateY:100}} whileInView={{translateY:0}} viewport={{amount:"some",once:true}} transition={{duration:1}}> */}
        <div className='absolute top-[50%] right-0 bg-[#250556] w-[400px] p-10 rounded-lg border-[#250556] backdrop-blur-md bg-opacity-30 text-[#DBC2FF] text-sm'>
          <p>- We also arrange LCs and BGs for Import-Export transactions above ₹10Cr through Banks Only and above 1 Cr without property from International Bank.</p>
          <br/>
          <p>- We are based at Lucknow and handling PAN India.</p>
        </div>
        {/* /</motion.div> */}
       </div>
       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#250556]"></div>
    </div>
    
   
  )
}

export default Hero
