"use client";
import React from "react";
import Image from "next/image";
import Input from "./Input";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";

const ContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="mt-8 bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="order-last ml-10 md:order-first md:ml-24">
          <h3 className="mt-12">My Socials</h3>
          <div className="mt-4 flex flex-row">
            <a
              className="mr-4"
              href="https://www.linkedin.com/in/lushiliu/"
              target="_blank"
            >
              <Image src="./linkedin.svg" alt="" width={30} height={30} />
            </a>
            <a
              className="mr-4"
              href="https://github.com/lushi-liu"
              target="_blank"
            >
              <Image src="./github.svg" alt="" width={30} height={30} />
            </a>
          </div>
          <h3 className="mt-12">Phone Number</h3>
          <div className="mt-4 flex flex-row">
            <div className="mr-4">
              <Image src="./call.svg" alt="" width={30} height={30} />
            </div>
            <h1> +1 (647) 217-2510</h1>
          </div>
          <h3 className="mt-12">Email Address</h3>
          <div className="mb-16 mt-4 flex flex-row">
            <div className="mr-4">
              <Image src="./email.svg" alt="" width={30} height={30} />
            </div>
            <h1>lushiliu1@gmail.com</h1>
          </div>
        </div>
        <div className="mx-[5%] flex flex-col md:mx-12">
          <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
            What is your name?
          </h3>
          <Input
            type="String"
            placeholder=""
            onChange={() => {}}
            width={isMobile ? "327px" : "763px"}
            height={isMobile ? "46px" : "56px"}
            inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
          />
          <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
            What is your email?
          </h3>
          <Input
            type="String"
            placeholder=""
            onChange={() => {}}
            width={isMobile ? "327px" : "763px"}
            height={isMobile ? "46px" : "56px"}
            inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
          />
          <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
            Write something about your project goals and timeframe
          </h3>
          <textarea
            placeholder=""
            onChange={() => {}}
            className={`${isMobile ? "w-[327px]" : "w-[763px]"} h-[190px] ${
              isMobile ? "px-4 py-2" : ""
            } rounded-[10px] border-[1px] border-solid border-[#CCE1FF] bg-white-800 dark:border-[#2C3C56] dark:bg-black-300`}
          ></textarea>
          <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
            How to reach back to you? eg. phone number or email
          </h3>
          <div className="mb-6 md:mb-12">
            <Input
              type="String"
              placeholder=""
              onChange={() => {}}
              width={isMobile ? "327px" : "763px"}
              height={isMobile ? "46px" : "56px"}
              inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
            />
          </div>
          <div className="mb-6 flex md:mb-12 md:justify-end">
            <Button
              buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
              textColor="text-white-900 font-semibold"
              hPadding="px-4"
              width={isMobile ? "w-[345px]" : "w-[186px]"}
              height={isMobile ? "h-[47px]" : "h-[69px]"}
              extraStyles={isMobile ? "text-14" : "text-18"}
              onClick={() => {}}
              text="Send"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
