import { VebosLogo } from "@assets/icons";
import Image from "next/image";
import React from "react";

const GuestFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-[20px] md:p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-evenly">
          <div className="mb-6 md:mb-0 space-y-5 mr-auto">
            <a href="#" className="flex items-center">
              <VebosLogo />
            </a>
            <h1>Copyright © Vebos Media all rights reserved.</h1>
            <div className="flex mt-4  sm:mt-0">
              <a
                href="#"
                className="text-white  bg-primary h-[36px] w-[36px] flex items-center justify-center rounded-full"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-white ms-5 bg-primary h-[36px] w-[36px] flex items-center justify-center rounded-full"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0766602 2.09057C0.0766602 1.62436 0.240386 1.23974 0.567824 0.936723C0.895263 0.633688 1.32095 0.482178 1.84485 0.482178C2.35941 0.482178 2.77572 0.631353 3.09381 0.92973C3.42125 1.23742 3.58498 1.63835 3.58498 2.13253C3.58498 2.58008 3.42594 2.95303 3.10785 3.25141C2.78041 3.5591 2.35005 3.71295 1.81678 3.71295H1.80275C1.28819 3.71295 0.871883 3.5591 0.553791 3.25141C0.235699 2.94372 0.0766602 2.55677 0.0766602 2.09057ZM0.259093 14.3283V4.98567H3.37448V14.3283H0.259093ZM5.10057 14.3283H8.21595V9.11155C8.21595 8.7852 8.25338 8.53345 8.32822 8.3563C8.45919 8.03928 8.658 7.77121 8.92463 7.55211C9.19127 7.33299 9.52572 7.22344 9.92801 7.22344C10.9758 7.22344 11.4997 7.92739 11.4997 9.33533V14.3283H14.6151V8.97169C14.6151 7.59173 14.2877 6.54511 13.6328 5.83183C12.9779 5.11854 12.1125 4.7619 11.0366 4.7619C9.82978 4.7619 8.88955 5.27938 8.21595 6.31435V6.34232H8.20192L8.21595 6.31435V4.98567H5.10057C5.11927 5.28404 5.12863 6.21177 5.12863 7.76889C5.12863 9.326 5.11927 11.5125 5.10057 14.3283Z"
                    fill="white"
                  />
                </svg>

                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-white ms-5 bg-primary h-[36px] w-[36px] flex items-center justify-center rounded-full"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-9  md:gap-[150px]  ml-auto ">
            <div className=" col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Linkes
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {[
                  ["Home", "#"],
                  ["Episodes", "#"],
                  ["Trending", "#"],
                  ["Category", "#"],
                  ["Blog", "#"],
                ].map(([name, path]) => (
                  <li key={name} className="mb-4">
                    <a href={path} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Features
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {[
                  ["Style guide", "#"],
                  ["Instructions", "#"],
                  ["Catelog", "#"],
                  ["Your podcast", "#"],
                ].map(([name, path]) => (
                  <li key={name} className="mb-4">
                    <a href={path} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" col-span-1">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {[
                  ["Privacy", "#"],
                  ["Terms", "#"],
                  ["Security", "#"],
                  ["Cookies", "#"],
                ].map(([name, path]) => (
                  <li key={name} className="mb-4">
                    <a href={path} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;
