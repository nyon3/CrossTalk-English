import Link from "next/link";

const Button = ({ link, children }) => {
  return (
    <div className="flex justify-center">
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <Link href={link}>{children}</Link>
      </button>
    </div>
  );
};

export default Button;
