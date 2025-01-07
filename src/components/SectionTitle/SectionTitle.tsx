import Image from 'next/image'
import React from 'react'

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({text}: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
        <div className="tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px]">
            <Image src="/images/leftLeaf.png" width={35} height={36} alt="logo" />
        </div>
        <h3 className="tablet:text-5xl text-2xl font-bold text-[#111827]">{text}</h3>
        <div className="tablet:w-[35px] w-[25px] tablet:h-[36px] h-[26px]">
            <Image src="/images/rightLeaf.png" width={35} height={36} alt="logo" />
        </div>
    </div>
  )
}

export default SectionTitle