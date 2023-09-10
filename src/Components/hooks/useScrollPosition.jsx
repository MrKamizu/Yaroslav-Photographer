// useScrollPosition.js
import { useState, useEffect, useRef, useCallback } from "react";
import { throttle } from "../utils/hofs"; // Імпорт функції throttle для оптимізації скролла

const useScrollPosition = () => {
  const prevScrollPos = useRef(window.scrollY);
  const [visible, setVisible] = useState(true);

  const scrollCallback = (prevScrollPos, setVisible) => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos.current > currentScrollPos);
    prevScrollPos.current = currentScrollPos;
  };

  const trottleScrollCallback = throttle(scrollCallback, 100);

  const handleScroll = useCallback(() => {
    trottleScrollCallback(prevScrollPos, setVisible);
  }, [trottleScrollCallback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return visible;
};

export default useScrollPosition;
