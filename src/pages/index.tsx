import { Hero, Navbar, OurWhy, StudentReview, TrustedBy } from "@/components";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <StudentReview />
      <OurWhy />
    </div>
  );
}
