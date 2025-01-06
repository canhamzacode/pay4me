import Image from 'next/image'
import React from 'react'
import { Button } from '../Button'

const Hero = () => {
  return (
    <div className="w-full max-w-[1104px] mx-auto md:px-0 px-5 mt-16 relative">
      {/* Global Community Section */}
      <div className="w-full max-w-[408px] h-12 border-primary border gap-4 items-center justify-center flex bg-[#AFE27429] rounded-2xl mx-auto">
        <Image
          src="/images/users-pics.png"
          width={100}
          height={32}
          alt="logo"
        />
        <p className="tablet:text-sm text-xs text-primary font-extrabold">
          Joined by a global community of students
        </p>
      </div>

      {/* Hero Content */}
      <div className="w-full pt-16 flex flex-col gap-6 text-center items-center justify-center relative z-10">
        {/* Title */}
        <div className="max-w-[742px]">
          <h1 className="tablet:text-5xl text-2xl font-bold text-[#111827] md:leading-[59px] z-20">
            Cross-border{' '}
            <span className="border-b-4 border-b-primary ">Payment</span> for
            International Students
          </h1>
        </div>

        {/* Subtitle */}
        <div className="tablet:text-2xl text-base text-[#111827B2] max-w-[542px]">
          <p>
            The easiest and fastest way to pay tuition and fees to educational
            institutions, businesses, and government agencies worldwide.
          </p>
        </div>

        {/* Button */}
        <Button text="Read More" onClick={() => console.log('Clicked!')} />
      </div>

      {/* Left Illustration */}
      <div className="absolute left-0 top-0 z-0">
        <Image
          src="/images/leftIllustration.png"
          alt="left side illustration"
          width={268}
          height={368}
          className="w-[150px] h-[200px] md:w-[200px] md:h-[300px] lg:w-[268px] lg:h-[368px]"
        />
      </div>

      {/* Right Illustration */}
      <div className="absolute right-0 top-0 z-0">
        <Image
          src="/images/rightillustration.png"
          alt="right side illustration"
          width={268}
          height={368}
          className="w-[150px] h-[200px] md:w-[200px] md:h-[300px] lg:w-[268px] lg:h-[368px]"
        />
      </div>

      {/* Hero Image */}
      <div className="w-full flex flex-col mt-20 gap-24 relative z-10">
        <div className="w-full flex items-center justify-center px-6">
          <Image
            src="/images/appImage.png"
            alt="hero image"
            width={960}
            height={536}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero