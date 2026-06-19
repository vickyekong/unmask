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
import { DustMotes } from "@/components/effects/DustMotes";
import { ArchiveProgress } from "@/components/effects/ArchiveProgress";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Candlelight />
      <DustMotes />
      <FloatingSymbols />
      <ArchiveProgress />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider variant="parchment" />
        <Premise />
        <SectionDivider variant="ink" />
        <HowToPlay />
        <SectionDivider variant="parchment" />
        <WorldOfUnmask />
        <SectionDivider variant="ink" />
        <Symbolism />
        <SectionDivider variant="parchment" />
        <CardShowcase />
        <SectionDivider variant="ink" />
        <CommunityStories />
        <SectionDivider variant="parchment" />
        <Testimonials />
        <SectionDivider variant="ink" />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
