"use client"
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Community from "@/components/Community/Community";
import Pixelgrade from "@/components/Pixelgrade/Pixelgrade";
import Stats from "@/components/Stats/Stats";
import FooterDesign from "@/components/FooterDesign/FooterDesign";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import CTA from "@/components/CTA/CTA";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
       
        <Community />
        <Pixelgrade />
        <Stats />
        <FooterDesign />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
