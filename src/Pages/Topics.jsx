import React from "react";
import TopicElement from "../Components/UI/TopicElement";

const Topics = () => {
  return (
    <>
      <div className="mx-[16px] md:mx-[32px] lg:mx-[48px] my-10">
        <div className="mt-[60px]"></div>
        <TopicElement displayAll={true} />
      </div>
    </>
  );
};

export default Topics;
