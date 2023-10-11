// NewsSection component
import Link from "next/link";

const NewsSection = ({ allPostsData }) => (
  <div className="flex flex-col mt-10 max-w-lg md:w-3/4">
    <ul>
      {allPostsData.slice(0, 3).map(({ slug, date, title }) => (
        <li key={slug}>
          <div className="text-xl m mb-2">
            <small>{new Date(date).toLocaleDateString()}</small>
          </div>
          <div className="text-2xl m mb-7 font-bold">
            <Link href={`/eikaiwa-school/news/${slug}`}>{title}</Link>
          </div>
          <div className="border-b my-4"></div>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsSection;
