"use client";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { VebosLogo } from "@assets/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "@root/src/redux";
import { UserType } from "@root/src/utils";

const GuestHeader = () => {
  const { setTheme } = useTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const [expandNavbar, setExpandNavbar] = React.useState(false);
  const { isAuthenticated, userType } = useSelector((state: any) => state.auth);
  const isMediumScreen = () => {
    return window.innerWidth > 768;
  };

  useEffect(() => {
    const handleResize = () => {
      // if (!isMediumScreen()) {
      //   document.body.style.overflow = "unset";
      // }
      setExpandNavbar(!isMediumScreen() ? false : expandNavbar);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [expandNavbar]);

  return (
    <header>
      <nav className=" px-4 lg:max-w-screen-xl m-auto py-2.5 ">
        <div className="flex flex-wrap justify-between ">
          <Link href="/home" className="flex items-center">
            <VebosLogo />
          </Link>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => {
              setExpandNavbar(!expandNavbar);
              document.body.style.overflow = "hidden";
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              expandNavbar
                ? "fixed top-0 bottom-0 left-0 right-0 block z-50 backdrop-blur-[2px] overflow-hidden"
                : "hidden lg:block"
            }
            onClick={() => {
              setExpandNavbar(false);
              document.body.style.overflow = "unset";
            }}
          >
            {" "}
            <div
              className={`${
                expandNavbar
                  ? " bg-white rounded-[10px] h-full ml-auto w-[250px] pt-6 space-y-10"
                  : "hidden justify-between items-center w-full lg:flex lg:w-auto"
              }   lg:order-1 space-x-8`}
              id="mobile-menu-2"
            >
              {expandNavbar && (
                <div className=" flex justify-end px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className=" w-fit h-fit">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                {[
                  ["Services", "/services"],
                  ["About us", "/about-us"],
                  ["Work", "/work"],
                  ["Contact Us", "/contact-us"],
                  ["Collection", "/collection"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      className={`block py-2 pr-4 pl-3  lg:p-0 ${
                        pathname === url
                          ? "text-primary font-semibold"
                          : "text-gray-500"
                      }`}
                      aria-current="page"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>

              {isAuthenticated ? (
                <Button
                  variant="destructive"
                  className=" w-fit h-fit"
                  onClick={() => {
                    userType === UserType.CREATOR
                      ? push("/dashboard")
                      : push("/campaigns");
                  }}
                >
                  Go To Dashboard
                </Button>
              ) : (
                <div className="lg:space-x-4 flex justify-center items-center">
                  <Button
                    variant="destructive"
                    className=" w-fit h-fit text-[14px] p-3"
                    onClick={() => {
                      push("/sign-in-creator");
                    }}
                  >
                    Login/Register as Creator
                  </Button>
                  <Button
                    variant="destructive"
                    className=" w-fit h-fit text-[14px] p-3"
                    onClick={() => {
                      push("/sign-in-company");
                    }}
                  >
                    Login/Register as Company
                  </Button>
                  {!expandNavbar && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className=" w-fit h-fit">
                          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                          System
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default GuestHeader;
