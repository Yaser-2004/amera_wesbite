'use client'

import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className='hero relative bg-[url(/Assets/backImage.png)] h-[1000px] bg-no-repeat bg-[center_top_-10rem] bg-cover'>
       <div className='ml-auto mr-auto max-w-[1300px] h-full'>
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
       </div>
       <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#250556]"></div>
    </div>
  )
}

export default Hero
