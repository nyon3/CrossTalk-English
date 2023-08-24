import Link from "next/link";

// TODO - Desing menu items, Add drawer menu for mobile, and change the menu items for podcast page
const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              CrossTalk英会話
            </Link>
          </div>
          {/* <div className="hidden md:block"> */}
            <div className=" flex items-center">
              <Link
                href="https://forms.gle/wRLWN8WiLdQLZdLQ9"
                className="text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                体験レッスン申込
              </Link>
            </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
