import Link from "next/link";

const NewsSection = ({ allPostsData }) => (
  <div
    style={{
      padding: "2rem",
      backgroundColor: "#f5f5f5",
    }}
  >
    <ul>
      {allPostsData.slice(0, 3).map(({ slug, date, title }) => (
        <li
          style={{
            listStyle: "none",
            marginBottom: "1.3rem",
          }}
          key={slug}
        >
          <small>{new Date(date).toLocaleDateString()}</small>
          <br />
          <Link
            href={`/news/${slug}`}
            style={{
              fontSize: "1rem",
            }}
          >
            {title}
          </Link>
          <br />
        </li>
      ))}
    </ul>
  </div>
);

export default NewsSection;
