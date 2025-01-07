import { DownloadBanner, DownloadGuide, Faqs, Footer, Hero, LatestBlogs, Navbar, OurWhy, StudentReview, TrustedBy } from "@/components";
import { client } from "@/lib/contentful";
import { IBlog } from "@/types";

interface BlogPost {
  posts: IBlog[];
}

export default function Home({ posts }: BlogPost) {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <StudentReview />
      <OurWhy />
      <DownloadGuide />
      <LatestBlogs posts={posts} />
      <Faqs />
      <DownloadBanner />
      <Footer />
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
