import React from "react";
import TopicList from "../components/topic/TopicList"; // Імпорт компонента списку тем

const Topics = () => {
  return (
    <>
      {/* Обгортка для сторінки тем */}
      <div className="mx-[16px] md:mx-[32px] lg:mx-[48px] my-10">
        {/* Пустий блок для збільшення вертикального відступу */}
        <div className="mt-[60px]"></div>

        {/* Відображення компонента списку тем */}
        <TopicList />
      </div>
    </>
  );
};

export default Topics;
