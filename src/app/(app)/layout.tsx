"use client";
import { AuthGuard } from "@root/src/guards/auth-guard";
import { AuthLayout } from "@root/src/layouts";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthGuard>
    <AuthLayout> {children}</AuthLayout>
  </AuthGuard>
);

export default Layout;
