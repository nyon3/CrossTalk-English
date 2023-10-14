import Link from "next/link";

const Button = ({ link, children }) => {
  return (
    <div className="flex justify-center">
      <button className="bg-white hover:bg-gray-200 text-slate-800 font-bold py-2 px-4 rounded-full">
        <Link href={link}>{children}</Link>
      </button>
    </div>
  );
};

export default Button;
