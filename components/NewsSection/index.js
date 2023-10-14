// NewsSection component
import Link from "next/link";
import Image from "next/image";

const NewsSection = ({ allPostsData }) => (
  <div className="flex flex-col mt-10 w-full">
    {allPostsData.slice(0, 3).map(({ slug, date, title, featuredImage, category }) => (
      <div className="flex flex-col sm:flex-row bg-white p-6 rounded-lg shadow-lg mb-6 items-center" key={slug}>
        <div className="mb-4 sm:mb-0 flex-shrink-0 sm:mr-6 w-full sm:w-auto">
          <Image 
            src={`/images/${featuredImage}`} 
            alt={"image"} 
            width={200}
            height={200}
          />
             
        </div>
        <div className="flex-grow">
          <div className="text-xl mb-2">
            <small>{new Date(date).toLocaleDateString()}</small>
          </div>
          <span className="inline-block bg-gray-800 text-white text-sm px-2 py-1 rounded-full my-2">
            {category}
          </span>     
          <div className="text-2xl mb-7 font-bold hover:text-rose-600 duration-150">
            <Link href={`/eikaiwa-school/news/${slug}`}>{title}</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default NewsSection;
