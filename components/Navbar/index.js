import Link from "next/link";
import { useRouter } from "next/router";

// Sample data for logo
const logo = {
  root: [{ label: "CrossTalk英会話", href: "/"}],
  podcast: [{ label: "CrossTalk.fm", href: "/podcast"}],
};

// Sample data for menuItems
const menuItems = {
  root: [
    // { label: "About", href: "/about" },
    { label: "体験レッスン", href: "https://forms.gle/wRLWN8WiLdQLZdLQ9"},
  ],
  podcast: [
    // { label: "About", href: "podcast/about" },
    // { label: "Episodes", href: "/podcast/episodes" },
    // { label: "Subscribe", href: "/podcast/subscribe" },
    // { label: "Feedback", href: "/podcast/feedback" },
  ],
};

// const podcastPlatformLinks = [
//   {label: "Apple Podcasts", href: "https://podcasts.apple.com/jp/podcast/crosstalk-%E8%8B%B1%E4%BC%9A%E8%A9%B1/id1501899924"},
//   {label: "Spotify", href: "https://open.spotify.com/show/0WC1jhnjSlNxamC2tc47Lb"},
// ];

const Navbar = () => {
  const router = useRouter();

  const isRoot = router.pathname === "/";
  const isPodcast = router.pathname === "/podcast";

  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl md:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {isRoot &&
             logo.root.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white font-bold text-xl">
                  {item.label}
                </Link>
              ))
            }
           {
            isPodcast && 
             logo.podcast.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white font-bold text-xl">
                  {item.label}
                </Link>
              ))
           }
          </div>
          {/* <div className="hidden md:block"> */}
            <div className="flex items-center">
              {isRoot &&
                menuItems.root.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 font-bold hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              {isPodcast &&
                menuItems.podcast.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
