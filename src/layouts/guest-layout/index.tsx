import React, { ReactNode } from "react";
import GuestFooter from "./footer";
import GuestHeader from "./header";

interface LayoutProps {
  children: ReactNode;
}
export const GuestLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <GuestHeader />
      <div className="m-auto px-[20px] md:px-32 lg:px-22 py-20">{children}</div>
      <GuestFooter />
    </div>
  );
};
