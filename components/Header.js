import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
const Header = () => {
  const router = useRouter();
  const menu = [
    {
      name: "Youtube Downloader",
      href: "/",
    },
  ];
  return (
    <div>
      <div className="h-16 w-full flex items-center justify-center border-b-2">
        <div className="flex items-center gap-x-2">
          <AiFillYoutube className="text-4xl text-[#FF0000]" />
          <p className="text-xl font-semibold text-red-500">
            YouTube Downloader
          </p>
        </div>
      </div>
      <ul className="px-64 h-20 flex items-center border-b-2">
        {menu.map((menuItem, key) => (
          <Link href={menuItem.href || "#"} key={key}>
            <a
              className={`border-b-2 font-semibold transition-all hover:text-[#ff0000] ${
                router.asPath == menuItem.href
                  ? "border-red-500"
                  : "border-hidden"
              } h-full flex items-center justify-center`}
            >
              {menuItem.name}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
