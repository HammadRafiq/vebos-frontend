"use client";
import { GuestGuard } from "@root/src/guards/guest-guard";
import { GuestLayout } from "@root/src/layouts";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <GuestGuard>
    <GuestLayout> {children}</GuestLayout>
  </GuestGuard>
);

export default Layout;
