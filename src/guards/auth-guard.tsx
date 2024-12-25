import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
// import { paths } from "@root/paths";
// import { Issuer } from "@enums/auth";
import { useRouter } from "next/navigation";
import LoadingComponent from "@components/loading";
import { useSelector } from "../redux";

// const loginPaths: Record<Issuer, string> = {
//   [Issuer.JWT]: paths.auth.jwt.login,
//   [Issuer.SLACK]: paths.auth.slack.login,
// };

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard(props: any): JSX.Element | null {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [checked, setChecked] = useState<boolean>(true);

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname + window.location.search,
      }).toString();
      const href = "/";
      router.push(href);
    } else {
      setChecked(true);
    }
    setChecked(true);
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return <LoadingComponent primaryLoading />;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
}
