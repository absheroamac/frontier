import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  tag: string;
  readingTime: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export function getSortedArticlesData(): ArticleData[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        image: matterResult.data.image,
        excerpt: matterResult.data.excerpt,
        tag: matterResult.data.tag || 'ESSAYS',
        readingTime: matterResult.data.readingTime || '5 MIN READ',
        content: matterResult.content, // Raw markdown body not compiled for list view
        ...matterResult.data,
      } as ArticleData;
    });

  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleData(slug: string): Promise<ArticleData | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const htmlContent = await marked.parse(matterResult.content);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      excerpt: matterResult.data.excerpt,
      tag: matterResult.data.tag || 'ESSAYS',
      readingTime: matterResult.data.readingTime || '5 MIN READ',
      content: htmlContent,
      ...matterResult.data,
    } as ArticleData;
  } catch (error) {
    return null;
  }
}
