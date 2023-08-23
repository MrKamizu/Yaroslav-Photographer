import React, { useState, useEffect, useRef, useCallback } from "react";

const TopicElement = ({
  isMobile,
  scrollY,
  item: { imageUrl, category, topic, author },
}) => {
  const [offset, setOffset] = useState(0);

  const currentEl = useRef(null);

  const paralaxCallback = useCallback(() => {
    const windowHeight = window.innerHeight;
    const elementPosition = currentEl.current.getBoundingClientRect();

    const isVisible =
      elementPosition.y < windowHeight + 100 &&
      elementPosition.y + elementPosition.height + 100 > 0;

    const relative =
      elementPosition.y - (windowHeight - elementPosition.height) / 2;

    return isVisible ? -relative * 0.2 : 0;
  }, []);

  useEffect(() => {
    setOffset(currentEl.current && !isMobile ? paralaxCallback() : 0);
  }, [scrollY, isMobile, paralaxCallback]);

  return (
    <div
      ref={currentEl}
      className="mb-3 md:mb-5 lg:mb-10 relative md:h-screen w-full rounded-[10px] md:rounded-[16px] flex-col justify-start items-center inline-flex overflow-hidden"
    >
      <img
        loading="lazy"
        className="w-full object-cover brightness-75"
        src={imageUrl}
        alt="Placeholder"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        className={`absolute w-full h-full p-[1rem] sm:p-[2rem] md:p-[2rem] lg:p-[3rem] xl:p-[3rem] 2xl:p-[4rem] 3xl:p-[6rem] ${
          isMobile
            ? "flex flex-col justify-between"
            : "justify-between items-start inline-flex"
        }`}
      >
        <div className="flex-col justify-start items-start gap-3 inline-flex ">
          <div className="text-stone-100 text-1xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal uppercase leading-[1.15em] md:leading-[1.2em] lg:leading-[1.25em] xl:leading-[1.3em] 2xl:leading-[1.35em] tracking-wide">
            {category}
          </div>
          <div className="justify-start items-center gap-[1.25rem] inline-flex">
            {/* <div className="p-[0.5rem] bg-white bg-opacity-5 rounded-[4rem] border border-white border-opacity-20 backdrop-blur-[0.625rem] justify-center items-center flex">
                  <div className="p-[0.25rem] justify-center items-center flex" />
                </div> */}
            <div className="text-center text-stone-100 text-[16px] md:text-lg font-normal leading-none tracking-wide">
              {topic}
            </div>
          </div>
        </div>
        <div className="backdrop-blur-[0.625rem] items-center flex">
          <div className="px-[0.5rem] py-[0.5rem] md:px-[1.5rem] md:py-[0.75rem] bg-white bg-opacity-5 rounded border border-white border-opacity-20 justify-start items-start flex">
            <div className="text-white text-sm md:text-lg font-normal">
              {author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicElement;
