import { MoodboardNav } from "@/components/moodboard/MoodboardNav";
import { MoodboardContent } from "@/components/moodboard/MoodboardContent";

export const metadata = {
  title: "UNMASK — Brand Mood Board",
  description:
    "Working brand mood board for UNMASK — colors, typography, voice, imagery, and design guidelines.",
};

export default function MoodboardPage() {
  return (
    <div className="min-h-screen ink-surface">
      <MoodboardNav />
      <MoodboardContent />
    </div>
  );
}
