// NewsSection component
import Link from "next/link";

const NewsSection = ({ allPostsData }) => (
  <div className="flex flex-col mt-10 w-full">
    {allPostsData.slice(0, 3).map(({ slug, date, title }) => (
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6" key={slug}>
        <div className="text-xl mb-2">
          <small>{new Date(date).toLocaleDateString()}</small>
        </div>
        <div className="text-2xl mb-7 font-bold">
          <Link href={`/eikaiwa-school/news/${slug}`}>{title}</Link>
        </div>
        <div className="flex justify-end">
        <Link href={`/eikaiwa-school/news/${slug}`}>Read more</Link>
        </div>
      </div>
    ))}
  </div>
);

export default NewsSection;


