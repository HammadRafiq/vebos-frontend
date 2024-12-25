"use client";
import { HomeSection } from "@sections/auth";
import React from "react";
import { GuestLayout } from "../layouts";
function HomePage(): JSX.Element {
  return (
    <GuestLayout>
      <HomeSection />
    </GuestLayout>
  );
}

export default HomePage;
