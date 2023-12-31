import React from "react";

import TopicList from "../topic/TopicList";

const PER_PAGE = 4;

const PhotoTopics = () => {
  return (
    <div className="mx-[16px] md:mx-[32px] lg:mx-[48px] my-10">
      <div className="w-full justify-between items-center inline-flex mb-10">
        <div className="text-stone-100 md:text-[48px] lg:text-[64px] font-normal uppercase leading-[1.2] md:leading-[1.3] lg:leading-[57.60px] tracking-wide">
          Selected topics
        </div>
        <div className="justify-end items-center flex">
          <div className="justify-start items-center gap-[30px] flex">
            <div className="p-[9px] bg-white bg-opacity-5 rounded-[104px] border border-white border-opacity-20 justify-center items-center flex">
              <div className="p-[5px] justify-center items-center flex" />
            </div>
            <div className="text-center text-stone-100 text-base font-normal uppercase leading-none tracking-wide">
              See All
            </div>
          </div>
        </div>
      </div>
      <TopicList perPage={PER_PAGE} />
    </div>
  );
};

export default PhotoTopics;
