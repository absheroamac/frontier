import { Header } from "@/components/Header";
import { EditorialHero } from "@/components/EditorialHero";
import { AuthorityMetrics } from "@/components/AuthorityMetrics";
import { PhilosophyStatement } from "@/components/PhilosophyStatement";
import { EditorialGrid } from "@/components/EditorialGrid";
import { InquirySection } from "@/components/InquirySection";
import { ContactSection } from "@/components/ContactSection";
import { MinimalFooter } from "@/components/MinimalFooter";
import { GenerativeCircleBackground } from "@/components/GenerativeCircleBackground";
import { getSortedArticlesData } from "@/lib/mdx";

export default function Home() {
  const allArticles = getSortedArticlesData();

  return (
    <main className="relative min-h-screen bg-carbon selection:bg-emerald-500 selection:text-white">
      <Header />
      <GenerativeCircleBackground />
      <EditorialHero />
      <AuthorityMetrics />
      <PhilosophyStatement />
      <EditorialGrid allArticles={allArticles} />
      <InquirySection />
      <ContactSection />
      <MinimalFooter />
    </main>
  );
}
