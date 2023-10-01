"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useThemeState from "@/src/store/themeStore";
import { usePathname } from "next/navigation";
// import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeState();
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/resume.pdf";
    anchor.download = "resume.pdf";
    anchor.click();
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
          <div className="flex flex-row" onClick={handleDownload}>
            <Image
              src={theme === "dark" ? "/downloaddark.svg" : "/download.svg"}
              alt=""
              width={20}
              height={20}
            />
            <span className="ml-2">Resume</span>
          </div>
        </button>
        <div className="mr-12 dark:text-white-800">|</div>
        <button onClick={toggleTheme} className="mr-12">
          <Image
            src={theme === "dark" ? "/moon.svg" : "/sun.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
      {/* MOBILE */}
      <div className="mt-5 flex flex-row md:hidden">
        <button onClick={toggleTheme} className="mr-4">
          <Image
            src={theme === "dark" ? "/moon.svg" : "/sun.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
        <div onClick={toggleMenu}>
          <Image
            src={theme === "dark" ? "/menu-dark.svg" : "/menu-light.svg"}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
      {expanded && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-[#20204080]">
          <div className="m-10 flex h-1/4 w-[70%] flex-col items-center gap-2 rounded-[40px] bg-white-800 opacity-100 dark:bg-black-200">
            <button onClick={toggleMenu} className="ml-[65%] ">
              <div className="text-24 font-extrabold dark:text-white-900">
                X
              </div>
            </button>
            <button
              onClick={toggleMenu}
              className={`mx-[30%] text-14 font-semibold ${
                pathname === "/"
                  ? "text-blue-light dark:text-blue-dark"
                  : "text-white-500 dark:text-white-800"
              }`}
            >
              <Link href="/">Home</Link>
            </button>
            <button
              onClick={toggleMenu}
              className={`mx-[30%] text-14 font-semibold ${
                pathname === "/casestudies"
                  ? "text-blue-light dark:text-blue-dark"
                  : "text-white-500 dark:text-white-800"
              }`}
            >
              <Link href="/casestudies">Case Studies</Link>
            </button>
            <button
              onClick={toggleMenu}
              className={`mx-[30%] text-14 font-semibold ${
                pathname === "/contact"
                  ? "text-blue-light dark:text-blue-dark"
                  : "text-white-500 dark:text-white-800"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </button>

            <button className="mx-[35%] text-14 font-semibold text-black-200 dark:text-white-800">
              <div className="flex flex-row">
                <Image
                  src={theme === "dark" ? "/downloaddark.svg" : "/download.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="ml-2">Resume</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
