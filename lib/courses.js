import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/courses");

export function getSortedCoursesData() {
  const fileNames = fs.readdirSync(contentDirectory);
  const allCoursesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      ...data,
    };
  });
  return allCoursesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getCourseData(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    ...data,
  };
}
