import { useEffect } from "react";

const OnEnter = (onSubmit: () => void | null) => {
  useEffect(() => {
    document.addEventListener("keydown", _onKeyDown);
    return () => {
      document.removeEventListener("keydown", _onKeyDown);
    };
  }, [onSubmit]);

  function _onKeyDown(e: { code: string }) {
    if (e.code == "Enter") onSubmit();
  }
};

export default OnEnter;
