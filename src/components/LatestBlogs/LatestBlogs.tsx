import React from 'react'
import { BlogCard } from '../BlogCard'
import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import { IBlog } from '@/types'

interface LatestBlogsProps {
  posts: IBlog[];
}

const LatestBlogs = ({ posts }: LatestBlogsProps) => {
  console.log("blogss.....",posts)
  return (
    <div className="w-full bg-[#f9faff] py-16">
        <div className="w-full max-w-[1194px] mx-auto md:px-0 px-5 mt-16">
          <SectionTitle text='Latest Blogs and Resources' />
          <div className='grid tablet:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-14 px-5'>
              {posts.map((post: IBlog) => (
                <BlogCard key={post.fields.slug} post={post} />
              ))}
          </div>
          <div className='mt-6 flex items-center justify-center'>
              <Button text='View More' />
          </div>
        </div>
    </div>
  )
}

export default LatestBlogs