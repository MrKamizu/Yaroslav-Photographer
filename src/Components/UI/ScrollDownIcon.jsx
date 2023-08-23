import React, { useCallback } from "react";

import Arrow from "../../assets/Arrow.svg";

const ScrollDownIcon = () => {
  const scrollToDown = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <span
        className={
          "mx-auto block rounded px-4 py-2 font-bold text-white cursor-pointer"
        }
        onClick={scrollToDown}
      >
        <img src={Arrow} alt="" className="w-[32px]" />
      </span>
    </>
  );
};

export default ScrollDownIcon;
