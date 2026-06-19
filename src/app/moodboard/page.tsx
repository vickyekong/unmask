import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MoodboardNav } from "@/components/moodboard/MoodboardNav";
import { MoodboardContent } from "@/components/moodboard/MoodboardContent";
import { Candlelight } from "@/components/effects/Candlelight";

export const metadata = {
  title: "UNMASK — Brand Mood Board",
  description:
    "Working brand mood board for UNMASK — colors, typography, voice, imagery, and design guidelines.",
};

export default function MoodboardPage() {
  return (
    <>
      <Candlelight />
      <Navigation />
      <div className="min-h-screen ink-surface pt-[49px]">
        <MoodboardNav />
        <MoodboardContent />
      </div>
      <Footer />
    </>
  );
}
