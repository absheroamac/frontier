import { getArticleData, getSortedArticlesData } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/ArticleNav";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleBody } from "@/components/ArticleBody";
import { ContactSection } from "@/components/ContactSection";
import { MinimalFooter } from "@/components/MinimalFooter";

export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articleData = await getArticleData(params.slug);
  const allArticles = getSortedArticlesData();

  if (!articleData) {
    notFound();
  }

  // Calculate dynamic "Read Next" link
  const currentIndex = allArticles.findIndex(a => a.slug === params.slug);
  const nextArticleRaw = allArticles[currentIndex + 1] || allArticles[0]; // Loop back to start
  const nextArticle = {
    title: nextArticleRaw.title,
    slug: nextArticleRaw.slug
  };

  return (
    <main className="bg-[#f4f4f5] text-carbon min-h-screen selection:bg-emerald-500/30 selection:text-carbon relative z-0">
      <ArticleNav />
      <ArticleHero 
        title={articleData.title}
        date={articleData.date}
        readingTime={articleData.readingTime}
        tag={articleData.tag}
        image={articleData.image}
      />
      <ArticleBody content={articleData.content} nextArticle={nextArticle} />
      <ContactSection />
      <MinimalFooter />
    </main>
  );
}
