import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Premise } from "@/components/Premise";
import { HowToPlay } from "@/components/HowToPlay";
import { WorldOfUnmask } from "@/components/WorldOfUnmask";
import { Symbolism } from "@/components/Symbolism";
import { CardShowcase } from "@/components/CardShowcase";
import { CommunityStories } from "@/components/CommunityStories";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Candlelight } from "@/components/effects/Candlelight";
import { FloatingSymbols } from "@/components/effects/FloatingSymbols";

export default function Home() {
  return (
    <>
      <Candlelight />
      <FloatingSymbols />
      <Navigation />
      <main>
        <Hero />
        <Premise />
        <HowToPlay />
        <WorldOfUnmask />
        <Symbolism />
        <CardShowcase />
        <CommunityStories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
