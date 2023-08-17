import React, { useState, useEffect } from "react";

const data = [
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "architecture",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "b&w",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "portraits",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "Ducks",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "Body",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "Paws",
    topic: "View topic",
    author: "Yaroslav Dveik",
  },
  // Додайте ще 3 об'єкти з різними значеннями
];

const TopicElement = ({ displayAll }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const limitedData = displayAll ? data : data.slice(0, 4); // Get all elements if displayAll is true, otherwise get only the first 4 elements

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {limitedData.map((item, index) => (
        <div
          key={index}
          className="mb-3 md:mb-5 lg:mb-10 relative w-full rounded-[10px] md:rounded-[16px] flex-col justify-start items-center inline-flex overflow-hidden"
        >
          <img
            className="h-1/3 md:h-screen w-full object-cover brightness-75"
            src={item.imageUrl}
            alt="Placeholder"
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
                {item.category}
              </div>

              <div className="justify-start items-center gap-[1.25rem] inline-flex">
                <div className="p-[0.5rem] bg-white bg-opacity-5 rounded-[4rem] border border-white border-opacity-20 backdrop-blur-[0.625rem] justify-center items-center flex">
                  <div className="p-[0.25rem] justify-center items-center flex" />
                </div>

                <div className="text-center text-stone-100 text-[16px] md:text-lg font-normal leading-none tracking-wide">
                  {item.topic}
                </div>
              </div>
            </div>

            <div className="backdrop-blur-[0.625rem] items-center flex">
              <div className="px-[0.5rem] py-[0.5rem] md:px-[1.5rem] md:py-[0.75rem] bg-white bg-opacity-5 rounded border border-white border-opacity-20 justify-start items-start flex">
                <div className="text-white text-sm md:text-lg font-normal">
                  {item.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicElement;
