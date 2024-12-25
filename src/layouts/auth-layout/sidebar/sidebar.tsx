"use client";
import { LogoutIcon, VebosLogo } from "@assets/icons";
import Link from "next/link";
import React, { useEffect } from "react";
import { SideBarData } from "./sidebar.data";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authActions, useDispatch, useSelector } from "@root/src/redux";
import { UserType } from "@root/src/utils";
export const AuthSidebar = ({ children }: any) => {
  const pathname = usePathname();
  const { userType } = useSelector((state: any) => state.auth);
  const [expandNavbar, setExpandNavbar] = React.useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const isMediumScreen = () => {
    return window.innerWidth > 768;
  };
  let filteredData;
  if (userType === UserType.CREATOR) {
    filteredData = SideBarData.filter((item) =>
      ["Dashboard", "My Profile", "Brand Collaboration", "Page Link"].includes(
        item.name
      )
    );
  } else if (userType === UserType.BRAND) {
    filteredData = SideBarData.filter((item) =>
      [
        "Campaigns",
        "Notifications",
        "My Profile",
        "Request",
        "Buy Clip",
      ].includes(item.name)
    );
  }
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
  const logoutHandler = () => {
    dispatch(authActions.logout());
    push("/");
    toast.success("You have been Logged out", {
      style: {
        color: "black",
        background: "rgba(188, 176, 244, 0.9)",
      },
    });
  };
  return (
    <>
      <div className=" flex justify-between pr-6">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => {
            setExpandNavbar(!expandNavbar);
            document.body.style.overflow = "hidden";
          }}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>{" "}
        <Link href="/" className="flex items-center md:hidden">
          <VebosLogo />
        </Link>
      </div>
      <aside
        id="logo-sidebar"
        // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        className={
          expandNavbar
            ? "fixed top-0 bg-white bottom-0 left-0 right-0 block z-50 backdrop-blur-[2px] overflow-hidden"
            : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
        onClick={() => {
          setExpandNavbar(false);
          document.body.style.overflow = "unset";
        }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary/10 dark:bg-gray-800">
          <Link href="/" className="flex items-center">
            <VebosLogo />
          </Link>
          <ul className="space-y-2 font-medium mt-[50px]">
            {filteredData?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`flex items-center py-3 px-4 ${
                    pathname.includes(item.link) ? "bg-primary text-white" : ""
                  } text-gray-900 rounded-[8px] dark:text-white hover:bg-primary hover:text-white group`}
                >
                  <item.icon />
                  <span className="ms-3 text-f18 font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <div
                onClick={logoutHandler}
                className={`flex cursor-pointer items-center py-3 px-4 text-gray-900 rounded-[8px] dark:text-white hover:bg-primary hover:text-white group`}
              >
                <LogoutIcon />
                <span className="ms-3 text-f18 font-medium">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" px-[20px] lg:p-12 ml-0 sm:ml-64 py-5">{children}</div>
    </>
  );
};
