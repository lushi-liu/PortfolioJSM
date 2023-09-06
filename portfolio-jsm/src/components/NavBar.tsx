"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useThemeState from "@/src/store/themeStore";
import { useRouter, usePathname } from "next/navigation";
// import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeState();
  return (
    <nav className="mx-[85px] flex h-[50px] justify-between bg-white-800 dark:bg-black-300">
      <div className="mt-[36px] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-blue-500 text-18 text-white">
        L
      </div>
      <div className="mt-[48px] flex">
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/"
              ? "text-blue-base dark:text-blue-dark"
              : "text-white-500 dark:text-white-800"
          }`}
        >
          <Link href="/">Home</Link>
        </button>
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/casestudies"
              ? "text-blue-base dark:text-blue-dark"
              : "text-white-500 dark:text-white-800"
          }`}
        >
          <Link href="/casestudies">Case Studies</Link>
        </button>
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/contact"
              ? "text-blue-base dark:text-blue-dark"
              : "text-white-500 dark:text-white-800"
          }`}
        >
          <Link href="/contact">Contact</Link>
        </button>

        <button className="mr-12 text-14 font-semibold text-black-200 dark:text-white-800">
          <Link href="/">
            <div className="flex flex-row">
              <Image
                src={theme === "dark" ? "./downloaddark.svg" : "./download.svg"}
                alt=""
                width={20}
                height={20}
              />
              <span className="ml-2">Resume</span>
            </div>
          </Link>
        </button>
        <div className="mr-12">|</div>
        <button onClick={toggleTheme} className="mr-12">
          {theme === "dark" ? (
            <Image src="./moon.svg" alt="" width={20} height={20} />
          ) : (
            <Image src="./sun.svg" alt="" width={20} height={20} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
