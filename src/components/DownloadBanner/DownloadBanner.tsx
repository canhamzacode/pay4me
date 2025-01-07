import React from 'react'
import Image from 'next/image'

const DownloadBanner = () => {
  return (
    <div className="w-full border py-16 px-5">
        <div className='w-full max-w-[1211px] h-[401px] bg-primary mx-auto rounded-[15px] overflow-hidden flex justify-between items-center gap-7 md:pl-24 pl-10 pr-4 text-white relative'>
            <div className='absolute bottom-0 left-0'>
              <Image src="/images/bannerLower.svg" width={120} height={120} alt='phone mockup' />
            </div>
            <div className='absolute top-0 left-0'>
              <Image src="/images/bannerTop.svg" width={120} height={120} alt='phone mockup' />
            </div>
            <div className='max-w-[566px] z-30 flex flex-col gap-5'>
                <h3 className='tablet:text-4xl text-2xl font-bold'>Download the Pay4Me App</h3>
                <p className='tablet:text-xl text-base font-semibold'>Our custom QR code will take you to your app store to
                download our awesome native apps</p>
                <div className='mt-5 flex items-center gap-5 flex-wrap'>
                  <button className='bg-black text-white w-[180px] px-4 py-2 rounded flex items-center gap-2'>
                    <Image src="/images/appleWhiteIcon.svg" width={27} height={33} alt='playstore icon' />
                    <div className='text-left'>
                      <p className='text-sm'>Download on the</p>
                      <p className='tablet:text-xl text-xs font-bold'>App Store</p>
                    </div>
                  </button>
                  <button className='bg-black text-white w-[180px] px-4 py-2 rounded flex items-center gap-2'>
                    <Image src="/images/playstoreIcon.svg" width={27} height={33} alt='playstore icon' />
                    <div className='text-left'>
                      <p className='text-sm'>Download on the</p>
                      <p className='tablet:text-xl text-xs font-bold'>Play Store</p>
                    </div>
                  </button>
                </div>
            </div>
            <div className='md:flex hidden'>
              <Image src="/images/appQr.png" width={473} height={360} alt='app qr code' />
            </div>
        </div>
    </div>
  )
}

export default DownloadBanner