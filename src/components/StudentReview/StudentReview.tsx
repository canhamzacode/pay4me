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
        <div className='w-[701px] mx-auto relative'>
            <button className='w-[45px] h-[49px] bg-[#7AC52D26] absolute -left-14 rounded-md flex items-center justify-center'>
                <Image src="/images/globeIcon.png" width={25} height={25} alt='globe icon' />
            </button>
            <h3 className='text-5xl font-bold'>Trusted by thousands of students and immigrants around the world</h3>
            <button className='w-[45px] h-[49px] bg-[#F56C2C26] absolute -right-14 bottom-0 rounded-md flex items-center justify-center'>
                <Image src="/images/flash.png" width={25} height={25} alt='flash icon' />
            </button>
        </div>
        <div className="mt-16 w-full flex items-center justify-center gap-x-20 gap-y-10 flex-wrap">
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
                    <div className="w-auto flex flex-col items-center justify-around gap-4 py-8 bg-light-gray rounded-lg">
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
    </div>
    </div>
  )
}

export default StudentReview