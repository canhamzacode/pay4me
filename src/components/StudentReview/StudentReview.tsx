import Image from 'next/image'
import React, { Fragment } from 'react'
import "./review.css"
import { StudentReviewCard } from '../StudentReviewCard'
import { AppStoreButton } from '../AppStoreButton'

const reviews = [
    {
        overlayImage: "/images/student1.svg",
        name: "Precious Mike",
        stars: 5,
        bgSize: 301,
        overlaySize: 200,
    },
    {
        overlayImage: "/images/student2.svg",
        name: "John Doe",
        stars: 4,
        bgSize: 301,
        overlaySize: 200,
    },
    {
        overlayImage: "/images/student3.svg",
        name: "Jane Doe",
        stars: 5,
        bgSize: 301,
        overlaySize: 200,
    },
    {
        overlayImage: "/images/student4.svg",
        name: "John Doe",
        stars: 4,
        bgSize: 301,
        overlaySize: 200,
    },
]

const StudentReview = () => {
  return (
    <div className='w-full max-w-[1189px] mx-auto  md:px-0 px-5 mt-16 py-14'>
        <div className='flex items-center justify-center'>
            <div className='flex tablet:gap-5 gap-3'>
                <button className='tablet:w-[45px] w-[30px] tablet:h-[49px] h-[30px] bg-[#7AC52D26] rounded-md flex items-center justify-center p-1'>
                    <Image src="/images/globeIcon.png" width={25} height={25} alt='globe icon' />
                </button>
                <h3 className='tablet:text-5xl text-2xl text-center tablet:w-[701px] w-full font-bold'>Trusted by thousands of students and immigrants around the world</h3>
                <button className='tablet:w-[45px] w-[30px] tablet:h-[49px] h-[30px] bg-[#F56C2C26] rounded-md flex items-center justify-center p-1'>
                    <Image src="/images/flash.png" width={25} height={25} alt='flash icon' />
                </button>
            </div>
        </div>
        <div className="mt-16 w-full flex items-center justify-center gap-x-20 tablet:gap-y-10 gap-y-5 flex-wrap">
        {reviews.map((review, index) => (
            <Fragment key={index}>
                <StudentReviewCard
                    overlayImage={review.overlayImage}
                    name={review.name}
                    stars={review.stars}
                    bgSize={review.bgSize}
                    overlaySize={review.overlaySize}
                />
                {/* Insert CTA after the second review */}
                {index === 0 && (
                    <div className="w-auto tablet:flex hidden flex-col items-center justify-around gap-4 py-8 bg-light-gray rounded-lg">
                        <div className="items-center w-[326px] flex flex-col gap-6 relative">
                            <AppStoreButton 
                                icon="/images/playstoreIcon.svg" 
                                platform="Play Store" 
                                description="More Reviews" 
                            />
                            <AppStoreButton 
                                icon="/images/appleIcon.svg" 
                                platform="App Store" 
                                description="More Reviews" 
                            />
                            <div className="absolute -top-8 -right-8 w-[438px] h-[340px]">
                                <Image src="/images/bgGradient.png" width={338} height={340} alt="bg gradient" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        ))}
         <div className="w-auto tablet:hidden flex flex-col items-center justify-around gap-4 py-8 bg-light-gray rounded-lg">
            <div className="items-center w-[326px] flex flex-col gap-6 relative">
                <AppStoreButton 
                    icon="/images/playstoreIcon.svg" 
                    platform="Play Store" 
                    description="More Reviews" 
                />
                <AppStoreButton 
                    icon="/images/appleIcon.svg" 
                    platform="App Store" 
                    description="More Reviews" 
                />
                <div className="absolute -top-8 -right-8 w-[438px] h-[340px]">
                    <Image src="/images/bgGradient.png" width={338} height={340} alt="bg gradient" className='w-full h-full' />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StudentReview