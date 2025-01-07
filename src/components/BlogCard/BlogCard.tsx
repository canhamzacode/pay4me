import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ContentfulImage } from '../ContentfulImage'
import { DateComponent } from '../DateComponent'
import Link from 'next/link'
import { IBlog } from '@/types'

interface BlogCardProps {
  post: IBlog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields

  return (
    <div className='w-full max-w-[380px] bg-white mx-auto'>
        <Link href={`/posts/${slug}`} aria-label={title}>
            <div className='overflow-hidden'>
                <ContentfulImage
                    alt={`Cover Image for ${title}`}
                    src={coverImage.fields.file.url}
                    width={coverImage.fields.file.details.image.width}
                    height={coverImage.fields.file.details.image.height}
                />
            </div>
            <div className='py-8 md:px-10 px-5 flex flex-col gap-4 text-[#AAAAAA] '>
                <div className='flex items-center text-sm gap-1'>
                    <DateComponent  dateString={date} />
                    <p className='text-sm'> | BY {author.fields.name} |</p>
                </div>
                <div className='pb-2 border-b border-b-[#DEDEDE]'>
                    <h4 className='tablet:text-2xl text-xl text-[#121212]'>{title}</h4>
                </div>
                <div>
                    <p>{excerpt}</p>
                </div>
                <button className='text-primary text-sm flex gap-5 items-center'>
                    <p>Read More</p>
                    <FaArrowRight   />
                </button>
            </div>
        </Link>
    </div>
  )
}

export default BlogCard