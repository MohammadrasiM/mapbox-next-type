import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import Device from "@/helpers/Device/index";

import { useQuery } from "@tanstack/react-query";
import { AuthService } from "@/api_services/auth/auth.service";
import { setCookie } from "cookies-next";

const fullwidthScreens = [
  "/404",
  "/500",
  "/auth",
  "/auth/sign-in",
  "/auth/sign-in/forgot-password",
  "/auth/sign-up",
  "/auth/sign-up/otp",
  "/auth/sign-in/otp",
  "/auth/sign-in/change-password",
  "/auth/sign-up/password",
];
const headerBlacklist = [
  "/auth",
  "/auth/sign-in",
  "/auth/sign-in/forgot-password",
  "/auth/sign-up/password",
  "/auth/sign-up",
  "/auth/sign-up/otp",
  "/auth/sign-in/otp",
  "/auth/sign-in/change-password",
  "/auth/verify",
  "/auth/sign-in/forgot-password/choose-method",
  "/_error",
];
const footerBlacklist = [
  "/auth",
  "/auth/sign-in",
  "/auth/sign-in/forgot-password",
  "/auth/sign-up",
  "/auth/sign-up/otp",
  "/auth/sign-in/otp",
  "/auth/sign-in/change-password",
  "/auth/verify",
  "/auth/sign-up/password",
  "/auth/sign-in/forgot-password/choose-method",
];

interface layOut {
  children: ReactNode;
}

const Layout = ({ children }: layOut) => {
  const router = usePathname();
  const [minHeight, setminHeight] = useState(0);
  useEffect(() => {
    setminHeight(window?.innerHeight);
  }, []);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const path = router;
  const isAuthScreen = path.includes("auth") || path.includes("terms");

  const { data, refetch } = useQuery([AuthService.GET_PROFILE_CACHEKEY], AuthService.GetProfile, {
    onSuccess: (e) => {
      setCookie("zip_code", e?.zip_codes[e?.zip_codes?.length - 1], { maxAge: 31556952000 });
      dispatch({
        type: "USER_INFO",
        payload: e,
      });
      setTimeout(() => {
        setAccessChecked(true);
      }, 2000);
    },
    onError: () => {
      setAccessChecked(true);
    },
    enabled: false,
  });

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "true") {
      refetch();
    } else {
      setAccessChecked(true);
    }
  }, []);

  return (
    <div className="app-background app-text transition-opacity">
      <div className="app-size " style={{ minHeight }}>
        <div className={`w-full md:w-full relative mx-auto h-full`}>{children}</div>
      </div>
      <Toaster />
    </div>
  );
};
export default Layout;
