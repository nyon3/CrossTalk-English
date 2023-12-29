import Image from "next/image";
import Link from "next/link";

const TextOnImage = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full relative mb-10 bg-white rounded-md overflow-hidden transition-opacity duration-300 hover:opacity-80"
        >
          <Link href={item.link}>
            <div className="h-96 w-full overflow-hidden">
              <Image
                src={`/images/${item.image}`}
                alt={item.alt}
                fill
                className="transition-transform duration-500 group-hover:scale-110 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2 md:p-10">
              <h3 className="text-white font-bolfd text-3xl md:text-5xl mb-2">
                {item.headline}
              </h3>
              <p className="text-white text-sm font-semibold mb-5">
                {item.content}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TextOnImage;
