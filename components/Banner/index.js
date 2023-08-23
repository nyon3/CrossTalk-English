import Link from "next/link";


const Banner = ({ newsData }) => {
  return (
    <div className="bg-blue-500 text-white py-2 rounded">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {newsData.slice(0, 1).map(({ slug, date, title }) => (
            <Link href={`/news/${slug}`} key={slug}>
              <span className="font-bold">{title}</span>
            </Link>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Banner;
