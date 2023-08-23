import React from "react";
import TopicList from "../components/topic/TopicList";

const Topics = () => {
  return (
    <>
      <div className="mx-[16px] md:mx-[32px] lg:mx-[48px] my-10">
        <div className="mt-[60px]"></div>
        <TopicList />
      </div>
    </>
  );
};

export default Topics;
