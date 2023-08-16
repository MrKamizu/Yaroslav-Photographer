import React from "react";

const data = [
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "architecture",
    topic: "view topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "b&w",
    topic: "view topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "portraits",
    topic: "view topic",
    author: "Yaroslav Dveik",
  },
  {
    imageUrl: "https://via.placeholder.com/1884x1080",
    category: "Dicks",
    topic: "view topic",
    author: "Yaroslav Dveik",
  },
  // Додайте ще 3 об'єкти з різними значеннями
];

const TopicElement = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="mb-10 relative w-full rounded-2xl flex-col justify-start items-center inline-flex"
        >
          <img
            className="h-screen w-full object-cover rounded-2xl brightness-75"
            src={item.imageUrl}
            alt="Placeholder"
          />
          <div className="absolute w-full p-[2rem] sm:p-[4rem] md:p-[6rem] lg:p-[8rem] xl:p-[10rem] 2xl:p-[12rem] justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-stone-100 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal uppercase leading-[1.15em] md:leading-[1.2em] lg:leading-[1.25em] xl:leading-[1.3em] 2xl:leading-[1.35em] tracking-wide">
                {item.category}
              </div>
              <div className="justify-start items-center gap-[1.25rem] inline-flex">
                <div className="p-[0.5rem] bg-white bg-opacity-5 rounded-[4rem] border border-white border-opacity-20 backdrop-blur-[0.625rem] justify-center items-center flex">
                  <div className="p-[0.25rem] justify-center items-center flex" />
                </div>
                <div className="text-center text-stone-100 text-base md:text-lg font-normal uppercase leading-none tracking-wide">
                  {item.topic}
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[0.625rem] justify-center items-center flex">
              <div className="px-[1.5rem] py-[0.75rem] bg-white bg-opacity-5 rounded border border-white border-opacity-20 justify-start items-start flex">
                <div className="text-white text-base md:text-lg font-normal uppercase">
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
