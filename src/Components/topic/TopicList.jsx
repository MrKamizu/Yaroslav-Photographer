import React, { useState, useEffect, useMemo } from "react";
import { useRecoilValue } from "recoil";

import TopicElement from "./TopicElement";
import { imageListState } from "../../state/imageAtoms";
import { throttle } from "../utils/hocs";

const TopicList = ({ perPage = null }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollY, setScrollY] = useState(0);

  const imageList = useRecoilValue(imageListState);

  const filterdList = useMemo(() => {
    if (!perPage) return imageList;
    else return imageList.slice(0, perPage);
  }, [imageList, perPage]);

  const handleResize = useMemo(
    () => throttle(() => setIsMobile(window.innerWidth <= 768)),
    []
  );

  const handleScroll = useMemo(
    () => throttle(() => setScrollY(window.scrollY), 10),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  return (
    <div>
      {filterdList.map((item) => (
        <TopicElement
          key={item.id}
          isMobile={isMobile}
          scrollY={scrollY}
          item={item}
        />
      ))}
    </div>
  );
};

export default TopicList;
