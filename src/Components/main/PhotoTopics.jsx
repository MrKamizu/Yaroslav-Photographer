import React from "react";
import TopicElement from "../UI/TopicElement";

const PhotoTopics = () => {
  return (
    <div className="mx-[48px] my-10">
      <div className="w-full justify-between items-center inline-flex mb-10">
        <div className="text-stone-100 text-[64px] font-normal uppercase leading-[57.60px] tracking-wide">
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
      <TopicElement />
    </div>
  );
};

export default PhotoTopics;
