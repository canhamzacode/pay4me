import { IBlog } from '@/types'
import { RichText } from '../RichText'

interface PostBodyProps {
    post: IBlog
}

const PostBody = ({ post }: PostBodyProps) => {
  const { content } = post.fields


  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody