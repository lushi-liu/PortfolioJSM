"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useThemeState from "@/src/store/themeStore";
import { useRouter, usePathname } from "next/navigation";
// import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeState();
  const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="mx-6 flex justify-between bg-white-800 dark:bg-black-300 md:mx-[85px] md:h-[50px]">
      <div className="mt-5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue-500 text-18 text-white md:mt-[36px] md:h-[45px] md:w-[45px]">
        L
      </div>
      {/* DESKTOP */}
      <div className="mt-[48px] hidden md:flex">
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/"
              ? "text-blue-light dark:text-blue-dark"
              : "text-white-500 dark:text-white-800"
          }`}
        >
          <Link href="/">Home</Link>
        </button>
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/casestudies"
              ? "text-blue-light dark:text-blue-dark"
              : "text-white-500 dark:text-white-800"
          }`}
        >
          <Link href="/casestudies">Case Studies</Link>
        </button>
        <button
          className={`mr-12 text-14 font-semibold ${
            pathname === "/contact"
              ? "text-blue-light dark:text-blue-dark"
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
        <div className="mr-12 dark:text-white-800">|</div>
        <button onClick={toggleTheme} className="mr-12">
          {theme === "dark" ? (
            <Image src="./moon.svg" alt="" width={20} height={20} />
          ) : (
            <Image src="./sun.svg" alt="" width={20} height={20} />
          )}
        </button>
      </div>
      {/* MOBILE */}
      <div className="mt-5 md:hidden" onClick={toggleMenu}>
        <Image
          src={theme === "dark" ? "./menu-dark.svg" : "./menu-light.svg"}
          alt=""
          width={24}
          height={24}
        />
      </div>
      {expanded && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-[#20204080]">
          <div className="mr-7 mt-4">
            <button onClick={toggleMenu}>
              <div className="text-white-900">X</div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
