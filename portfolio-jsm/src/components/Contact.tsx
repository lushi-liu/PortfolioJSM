"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import { useMediaQuery } from "react-responsive";
import { Linkedin, Github, Email, Phone } from "./Icons";

interface FormType {
  user_name?: {
    value: string;
  };
  user_email?: {
    value: string;
  };
  message?: {
    value: string;
  };
  method?: {
    value: string;
  };
}

const ContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const form: React.RefObject<FormType | null> = useRef(null)

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setError("");
    setFormSubmitted(true);

    if (
      !form.current!.user_name?.value ||
      !form.current!.user_email?.value ||
      !form.current!.message?.value ||
      !form.current!.method?.value
    ){
      setError("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        "contact_form",
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="mt-8 bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="order-last ml-10 md:order-first md:ml-24">
          <h3 className="mt-12">My Socials</h3>
          <div className="mt-4 flex flex-row">
            <a
              className="mr-4 "
              href="https://www.linkedin.com/in/lushiliu/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="mr-4"
              href="https://github.com/lushi-liu"
              target="_blank"
            >
              <Github />
            </a>
          </div>
          <h3 className="mt-12">Phone Number</h3>
          <div className="mt-4 flex flex-row">
            <div className="mr-4">
              <Phone />
            </div>
            <h1> +1 (647) 217-2510</h1>
          </div>
          <h3 className="mt-12">Email Address</h3>
          <div className="mb-16 mt-4 flex flex-row">
            <div className="mr-4">
              <Email />
            </div>
            <h1>lushiliu1@gmail.com</h1>
          </div>
        </div>
        <div className="mx-[5%] flex flex-col md:mx-12">
          <form ref={form} onSubmit={sendEmail}>
            <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
              What is your name?
            </h3>
            <Input
              type="text"
              name="user_name"
              placeholder=""
              width={isMobile ? "327px" : "763px"}
              height={isMobile ? "46px" : "56px"}
              inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
            />
            <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
              What is your email?
            </h3>
            <Input
              type="email"
              name="user_email"
              placeholder=""
              width={isMobile ? "327px" : "763px"}
              height={isMobile ? "46px" : "56px"}
              inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
            />
            <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
              Write something about your project goals and timeframe
            </h3>
            <textarea
              placeholder=""
              name="message"
              className={`${
                isMobile ? "w-[327px] px-4 py-2" : "w-[763px]"
              } h-[190px] rounded-[10px] border-[1px] border-solid border-[#CCE1FF] bg-white-800 dark:border-[#2C3C56] dark:bg-black-300`}
            ></textarea>
            <h3 className="mt-4 text-18 dark:text-white-900 md:mt-6 md:text-20">
              How to reach back to you? eg. phone number or email
            </h3>
            <div className="mb-6 md:mb-12">
              <Input
                type="text"
                name="method"
                placeholder=""
                width={isMobile ? "327px" : "763px"}
                height={isMobile ? "46px" : "56px"}
                inputColor="bg-white-800 dark:bg-black-300 border-solid border-[1px] border-[#CCE1FF] dark:border-[#2C3C56]"
              />
            </div>
            <div className="mb-6 flex md:mb-12 md:justify-end">
              {formSubmitted && error && !isMobile && (
                <div className="mr-8 text-red-500">{error}</div>
              )}
              <button
                type="submit"
                className="h-[47px] w-[345px] rounded-[9000px] bg-blue-light px-4 py-2 text-14 font-semibold text-white-900 dark:bg-blue-dark md:h-[69px] md:w-[186px] md:text-18"
              >
                Send
              </button>
            </div>
            {formSubmitted && error && isMobile && (
              <div className="mr-8 text-red-500">{error}</div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
