"use client";
import React, { ReactNode } from "react";

import { AuthSidebar } from "./sidebar/sidebar";
interface LayoutProps {
  children: ReactNode;
}
export const AuthLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <AuthSidebar>{children}</AuthSidebar>
    </div>
  );
};
