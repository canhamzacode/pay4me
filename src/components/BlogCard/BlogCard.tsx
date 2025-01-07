import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const BlogCard = () => {
  return (
    <div className='w-full max-w-[380px] bg-white'>
        <div className='h-[214px] bg-red-300'></div>
        <div className='py-8 px-10 flex flex-col gap-4 text-[#AAAAAA] '>
            <div>
                <p className='text-sm'>19 dec 2024 | BY Esther Ebere |</p>
            </div>
            <div className='pb-2 border-b border-b-[#DEDEDE]'>
                <h4 className='text-2xl text-[#121212]'>How to naviagate international payments for education without stress</h4>
            </div>
            <div>
                <p>Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being......</p>
            </div>
            <button className='text-primary text-sm flex gap-5 items-center'>
                <p>Read More</p>
                <FaArrowRight   />
            </button>
        </div>
    </div>
  )
}

export default BlogCard