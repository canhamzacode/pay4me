import { DownloadBanner, DownloadGuide, Faqs, Hero, LatestBlogs, OurWhy, StudentReview, TrustedBy } from "@/components";
import { client } from "@/lib/contentful";
import { IBlog } from "@/types";

interface BlogPost {
  posts: IBlog[];
}

export default function Home({ posts }: BlogPost) {
  console.log("authors", posts[0].fields.author)
  return (
    <div>
      <Hero />
      <TrustedBy />
      <StudentReview />
      <OurWhy />
      <DownloadGuide />
      <LatestBlogs posts={posts} />
      <Faqs />
      <DownloadBanner />
    </div>
  );
}


export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}
