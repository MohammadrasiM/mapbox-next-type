import React from "react";
import Button from "../components/shared/Button/Button";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
function FixedButtonMain({ title, onClick, borderTop, timer, moreClass, icon, variant, disable, loading }) {
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <>
      {!isKeyboardOpen ? (
        <div
          className={`fixed-button-main bg-white  dark:bg-slate-800  mt-4 ${
            borderTop && "border-t border-gray-100 dark:border-slate-600"
          } ${moreClass}`}
        >
          {timer && timer()}
          <Button
            disabled={disable}
            loading={loading}
            title={title}
            icon={icon}
            onClick={
              onClick
              // router.push(`/auth/login?mobile_number=${mobile}`)
            }
            width="w-full h-11"
            containerClass=" mx-auto mt-1 w-full mb-1"
            roundedClass={"rounded-full"}
            variant={variant}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default FixedButtonMain;
