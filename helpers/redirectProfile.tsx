import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const RedirectProfile = () => {
  // const isLogin = useSelector((state) => state?.auth?.isLogin);
  const router = useRouter();
  const asPath = usePathname();
  useEffect(() => {
    const isLoginTemp = localStorage.getItem("isLogin");
    if (!isLoginTemp) {
      router?.replace(`/auth?redirect_url=${asPath}`);
    }
  }, []);
};

export default RedirectProfile;
