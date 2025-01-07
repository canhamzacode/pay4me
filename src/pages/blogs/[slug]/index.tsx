import { PostBody, PostHeader, Skeleton } from '@/components'
import { client } from '@/lib/contentful/index'
import { IBlog } from '@/types'
import { useRouter } from 'next/router'

interface PostProps {
  post: IBlog
}

const Post = ({ post }: PostProps) => {
  const router = useRouter()

  return (
    <section className='bg-[#f9faff] py-20'>
      <div className='container w-full max-w-[700px] mx-auto  md:px-0 px-5 '>
        <article className='prose mx-auto'>
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async ({ params }: {params: any}) => {
  const cfClient =  client

  const { slug } = params
  const response = await cfClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post