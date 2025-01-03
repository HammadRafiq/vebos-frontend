import { contactUsImage } from "@assets/images";
import { Button } from "@components/button";
import { Typography } from "@components/typography";
import Image from "next/image";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { TbMail } from "react-icons/tb";

export const ContactUsForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  rounded-lg  overflow-hidden  border border-gray-200 ">
      <div className=" col-span-1 p-[32px] space-y-10">
        <Typography variant="h1">Contact us</Typography>
        <Typography variant="body">
          Lörem ipsum dongen fån i groupie bivibelt. Rurönysat mikroling om
          mikal.
        </Typography>
        <Typography variant="body" className="flex">
          <span className=" pr-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="#FF4434"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </span>
          123 456 789
        </Typography>
        <Typography variant="body" className="flex">
          <span className=" pr-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#FF4434"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="#FF4434"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          info@gmail.com
        </Typography>
        <Typography variant="body" className="flex">
          <span className=" pr-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                stroke="#FF4434"
                strokeWidth="1.5"
              />
              <path
                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                stroke="#FF4434"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          600 Congress Ave, Floor 14 Texas 45678
        </Typography>
        <div className=" rounded-lg w-full">
          <Image src={contactUsImage} alt="contact-us" />
        </div>
      </div>
      <div className=" col-span-1 bg-primary rounded-lg p-10 space-y-10">
        <div className=" space-y-2">
          <label htmlFor="name" className=" text-f20 font-medium text-white ]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            className="w-full rounded-[12px] text-f16 p-4  outline-0 bg-white"
          />
        </div>
        <div className=" space-y-2">
          <label htmlFor="email" className=" text-f20 font-medium text-white ]">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
            id="email"
            className="w-full rounded-[12px] text-f16 p-4  outline-0 bg-white"
          />
        </div>
        <div className=" space-y-2">
          <label
            htmlFor="message"
            className=" text-f20 font-medium text-white ]"
          >
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Type your message..."
            name="message"
            id="message"
            className="w-full rounded-[12px] text-f16 p-4  outline-0 bg-white"
          />
        </div>
        <div className=" flex justify-center">
          <Button variant="secondary" className=" w-fit px-20">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
