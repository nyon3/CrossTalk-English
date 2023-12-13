import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
// Sample data for logo
const logo = {
  root: [{ label: "CrossTalk英会話スクール", href: "/eikaiwa-school" }],
};

// Sample data for menuItems
const menuItems = {
  root: [
    // { label: "About", href: "/about" },
    { label: "体験レッスン", href: "https://forms.gle/wRLWN8WiLdQLZdLQ9" },
    { label: "料金", href: "/eikaiwa-school/price" },
    { label: "英会話カフェ", href: "/english-cafe-event" },
  ],
};

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {logo.root.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white font-bold text-xl"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* <div className="hidden md:block"> */}
          <div className="flex items-center">
            {
              <Sheet>
                <SheetTrigger className="text-white">Menu</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  {menuItems.root.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className=" hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <SheetFooter>
                    <SheetClose>Close</SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            }
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
