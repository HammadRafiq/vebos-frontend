"use client";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "../redux";
import LoadingComponent from "@components/loading";
import { UserType } from "../utils";

interface GuestGuardProps {
  children: ReactNode;
}

export function GuestGuard(props: GuestGuardProps): JSX.Element | null {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated, userType } = useSelector((state: any) => state.auth);
  const [checked, setChecked] = useState<boolean>(true);

  const check = useCallback(() => {
    if (isAuthenticated && userType === UserType.CREATOR) {
      router.replace("/dashboard");
    } else if (isAuthenticated && userType === UserType.BRAND) {
      router.replace("/campaigns");
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return <LoadingComponent primaryLoading />;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is authorized.

  return <>{children}</>;
}
