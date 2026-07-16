import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import ForLettingAgents from "@/components/ForLettingAgents";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <ForLettingAgents />
      <Testimonials />
      <Accreditations />
    </>
  );
}
