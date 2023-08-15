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
          <div className="absolute w-full p-[64px] justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-stone-100 text-[64px] font-normal uppercase leading-[57.60px] tracking-wide">
                {item.category}
              </div>
              <div className="justify-start items-center gap-[30px] inline-flex">
                <div className="p-[9px] bg-white bg-opacity-5 rounded-[104px] border border-white border-opacity-20 backdrop-blur-[50px] justify-center items-center flex">
                  <div className="p-[5px] justify-center items-center flex" />
                </div>
                <div className="text-center text-stone-100 text-lg font-normal uppercase leading-none tracking-wide">
                  {item.topic}
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[50px] justify-center items-center flex">
              <div className="px-[12px] py-[9px] bg-white bg-opacity-5 rounded border border-white border-opacity-20 justify-start items-start flex">
                <div className="text-white text-lg font-normal uppercase">
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
