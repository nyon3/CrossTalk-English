import Link from "next/link";

const NewsSection = ({ allPostsData }) => (
  <div
    style={{
      marginBottom: "2rem",
      padding: "2rem",
      backgroundColor: "#f5f5f5",
    }}
  >
    <ul>
      {allPostsData.map(({ slug, date, title }) => (
        <li
          style={{
            listStyle: "none",
            marginBottom: "1.3rem",
          }}
          key={slug}
        >
          <Link
            href={`/news/${slug}`}
            style={{
              fontSize: "1rem",
            }}
          >
            {title}
          </Link>
          <br />
          <small>{new Date(date).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsSection;
