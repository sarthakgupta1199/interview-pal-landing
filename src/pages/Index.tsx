import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import VideoReviews from "@/components/VideoReviews";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Screenshots />
      <Features />
      <HowItWorks />
      <VideoReviews />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
