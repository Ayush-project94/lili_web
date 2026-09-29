import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Courses from "../components/Courses/Courses";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Courses />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  );
}