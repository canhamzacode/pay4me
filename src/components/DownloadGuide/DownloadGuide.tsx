import Image from 'next/image'
import React from 'react'

const DownloadGuide = () => {
  const steps = [
    "Locate the App Store on your device: Open the App Store app for iOS users, and the Google Play Store app for Android users.",
    "Download the official Pay4Me app from the App Store or Google Play Store.",
    "Open the Pay4Me app and create an account. Then you are ready to go!"
  ]
  return (
    <div className="w-full py-10">
        <div className="w-full max-w-[1194px] mx-auto md:px-0 px-5 mt-16">
            <div className="flex items-center justify-center gap-4">
                <div className="tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px]">
                    <Image src="/images/leftLeaf.png" width={35} height={36} alt="logo" />
                </div>
                <h3 className="tablet:text-5xl text-2xl font-bold text-[#111827]">How to Download and Use the Pay4Me App</h3>
                <div className="tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px]">
                    <Image src="/images/rightLeaf.png" width={35} height={36} alt="logo" />
                </div>
            </div>
        </div>
        <div className='w-full grid tablet:px-20 px-10 mt-14 tablet:grid-cols-[1fr,0.6fr] grid-cols-1 relative '>
            <div className='w-full max-w-[751px] mx-auto flex flex-col gap-10 mt-7'>
                <div>
                    <h4 className='tablet:text-3xl text-xl font-bold'>Here&apos;s a step-by-step guide to downloading the Pay4Me app and getting started:</h4>
                </div>
                <div className='flex flex-col gap-7'>
                    {steps.map((step, index) => (
                        <div key={index} className='border-l-2 border-l-primary pl-3'>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute -top-48 right-0 h-full tablet:grid hidden'>
                <Image src="/images/appStoreImg.png" width={473} height={530} alt="download guide illustration" />
            </div>
        </div>
    </div>
  )
}

export default DownloadGuide
