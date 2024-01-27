import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const SideNav = () => {
  return (
    <div className="hidden md:flex flex-col justify-between pb-10 h-screen pt-28 border-r  px-4">
      <div className="flex justify-center items-center flex-col gap-4 ">
        <Link href="/" className="block dark:hidden hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/grid.svg" width={40} height={40} alt="logo" />
        </Link>
        <Link href="/" className="hidden dark:block hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/grid-dark.svg" width={26} height={26} alt="logo" />
        </Link>
        <Link href="/" className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/trend-up.svg" width={24} height={24} alt="logo" />
        </Link>
        <Link href="/" className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/Icon.svg" width={40} height={40} alt="logo" />
        </Link>
        <Link href="/" className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/box.svg" width={24} height={24} alt="logo" />
        </Link>
        <Link href="/" className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/discount.svg" width={24} height={24} alt="logo" />
        </Link>
        <Link href="/" className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
          <Image src="/icons/info.svg" width={24} height={24} alt="logo" />
        </Link>
        <ModeToggle />
      </div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <Link href="/" >
          <div className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
            <Image
              src="/icons/arrow-right.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </div>
        </Link>
        <Link href="/">
          <div className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
            <Image src="/icons/setting.svg" width={24} height={24} alt="logo" />
          </div>
        </Link>
        <Link href="/">
          <div className="hover:bg-green-400 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300">
            <Image src="/icons/logout.svg" width={24} height={24} alt="logo" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
