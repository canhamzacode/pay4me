import Image from 'next/image'
import React from 'react'



const TrustedBy = () => {
  const companies = [
    "/images/across.png",
    "/images/mpower.png",
    "/images/prodigy.png",
    "/images/techstars.png",
    "/images/stripe.png",
    "/images/paystack.png",
    "/images/providusBank.png",
    "/images/monnify.png"
  ]
  return (
    <div className='w-full max-w-[993px] mx-auto  md:px-0 px-5 mt-20 pb-4'>
        <div className='flex items-center justify-center gap-4'>
          <div className='tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px'>
            <Image src='/images/leftLeaf.png' width={35} height={36} alt='logo' />
          </div>
          <h3 className='tablet:text-5xl text-2xl font-bold text-[#111827]'>In Good Company</h3>
          <div className='tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px'>
            <Image src='/images/rightLeaf.png' width={35} height={36} alt='logo' />
          </div>
        </div>
        <div className='mt-4 flex items-center tablet:gap-[33px] gap-6 justify-center flex-wrap'>
            {companies.map((company, index) => (
                <Image key={index} src={company} width={135}  height={60} alt={company} />
            ))}
        </div>
        <div className='flex items-center justify-center mt-4'>
            <p className='text-primary tablet:text-2xl text-base font-bold border-b-2 border-b-primary inline mx-auto'>See More Partners</p>
        </div>
    </div>
  )
}

export default TrustedBy