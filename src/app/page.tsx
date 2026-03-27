import { Header } from "@/components/Header";
import { EditorialHero } from "@/components/EditorialHero";
import { AuthorityMetrics } from "@/components/AuthorityMetrics";
import { PhilosophyStatement } from "@/components/PhilosophyStatement";
import { EditorialGrid } from "@/components/EditorialGrid";
import { ContactSection } from "@/components/ContactSection";
import { MinimalFooter } from "@/components/MinimalFooter";
import { GenerativeCircleBackground } from "@/components/GenerativeCircleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-carbon overflow-hidden selection:bg-emerald-500 selection:text-white">
      <Header />
      <GenerativeCircleBackground />
      <EditorialHero />
      <AuthorityMetrics />
      <PhilosophyStatement />
      <EditorialGrid />
      <ContactSection />
      <MinimalFooter />
    </main>
  );
}
