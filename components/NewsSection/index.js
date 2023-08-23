import Link from "next/link";

const NewsSection = ({ allPostsData }) => (
  <div>
    <ul>
      {allPostsData.slice(0, 3).map(({ slug, date, title }) => (
        <li key={slug}>
          <div class="text-xl m mb-2">
            <small>{new Date(date).toLocaleDateString()}</small>
          </div>
          <div class="text-xl m mb-7 font-bold">
            <Link href={`/news/${slug}`}>{title}</Link>
          </div>
          <div class="border-b my-4"></div>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsSection;
