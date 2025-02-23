'use client'

import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className='hero'>
       <div className='ml-auto mr-auto max-w-[1300px] flex justify-between'>
        <div className='mt-32 left flex-1'>
            <h1 className='font-bold text-6xl text-[#6D2323] leading-[67px]'> High Value Project Finance From Government Banks.</h1>
            <p className='mt-8 text-[#6D2323] tracking-wide'>
                We secure ₹10 Cr+ project funding through banks and private investors across various industries. 
                We also arrange LCs and BGs for ₹10 Cr+ import-export deals via banks and ₹1 Cr+ without property from international banks. 
                Based in Lucknow, we operate PAN India.
            </p>
            <Button as={Link} className='mt-10 bg-[#FFEB00] text-[#6D2323] rounded-md font-bold h-12 w-56 text-base' href="#" variant="flat">
                Start Your Search <ArrowUpRight />
            </Button>
        </div>
        <div className='mt-8 right flex-1 flex justify-end right'>
            <Image src="/Assets/heroImage.png" width={600} height={600} />
        </div>
       </div>
    </div>
  )
}

export default Hero
