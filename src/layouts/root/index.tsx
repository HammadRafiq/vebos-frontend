"use client";

import React, { ReactNode, Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { GuestLayout } from "../guest-layout";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "@root/src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "@components/loading";

interface LayoutProps {
  children: ReactNode;
}

const persistor = persistStore(store);

const RootLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="bottom-center" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<LoadingComponent primaryLoading />}>
              {children}
            </Suspense>
          </ThemeProvider>{" "}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default RootLayout;
