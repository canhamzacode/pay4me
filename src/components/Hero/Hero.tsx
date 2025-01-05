import Image from 'next/image'
import React from 'react'
import { Button } from '../Button'

const Hero = () => {
  return (
    <div className='w-full max-w-[1104px] mx-auto  md:px-0 px-5 mt-16'>
        <div className='w-full max-w-[408px] h-12 border-primary border gap-4 items-center justify-center flex bg-[#AFE27429] rounded-2xl mx-auto'>
            <Image src='/images/users-pics.png' width={100} height={32} alt='logo' />
            <p className='text-sm text-primary font-extrabold'>Joined by a global community of students</p>
        </div>
        <div className='w-full pt-16 flex flex-col gap-6 text-center items-center justify-center relative'>
            <div className='absolute left-0'>
                <Image src="/images/leftIllustration.png" alt='left side illustation' width={268} height={368}  />
            </div>
            <div className='absolute right-0'>
                <Image src="/images/rightillustration.png" alt='right side illustation' width={268} height={368}  />
            </div>
            <div className='max-w-[742px]'>
                <h1 className='text-5xl font-bold text-[#111827] leading-[59px]'>Cross-border Payment for International Students</h1>
            </div>
            <div className='text-2xl text-[#111827B2] max-w-[542px]'>
                <p>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
            </div>
            <Button text="Read More" onClick={() => console.log("Clicked!")} />
        </div>
        <div className='w-full flex flex-col mt-20 gap-24'>
            <div className='w-full flex items-center justify-center px-6'>
                <Image src="/images/appImage.png" alt='hero image' width={960} height={536} />
            </div>
        </div>
    </div>
  )
}

export default Hero