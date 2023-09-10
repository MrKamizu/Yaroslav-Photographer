import React from "react";
import RadioCustom from "../UI/RadioCustom";

const UserInfo = () => {
  return (
    <div className="flex flex-col justify-between max-w-lg px-12 py-[60px] bg-zinc-100 rounded-2xl overflow-hidden h-full">
      {/* Інформація про користувача */}
      <div className="flex flex-col gap-10">
        <div className="text-2xl font-normal">Yaroslav Dveik</div>
        <div className="text-[40px] font-medium">
          Let's create <br /> together
        </div>
      </div>

      {/* Форма введення даних */}
      <div className="text-[16px]">
        <div className="grid grid-cols-2 gap-x-[30px]">
          {/* Поле для введення імені */}
          <div className="flex flex-col gap-2 w-full mb-[15px]">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-normal"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="w-full flex gap-2.5 bg-white px-2.5 py-[14px] rounded-2xl items-center text-base font-normal text-zinc-400"
                placeholder="John"
                required
              />
            </div>
          </div>

          {/* Поле для введення прізвища */}
          <div className="flex flex-col gap-2 w-full mb-[15px]">
            <div>
              <label
                htmlFor="second_name"
                className="block mb-2 text-sm font-normal"
              >
                Second name
              </label>
              <input
                type="text"
                id="second_name"
                className="w-full flex gap-2.5 bg-white px-2.5 py-[14px] rounded-2xl items-center text-base font-normal text-zinc-400"
                placeholder="Smitt"
                required
              />
            </div>
          </div>
        </div>

        {/* Поле для введення email */}
        <div className="flex flex-col gap-2 w-full">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-normal">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full flex gap-2.5 bg-white px-2.5 py-[14px] rounded-2xl items-center text-base font-normal text-zinc-400"
              placeholder="john.doe@company.com"
              required
            />
          </div>
        </div>
      </div>

      {/* Компонент RadioCustom */}
      <RadioCustom />

      {/* Кнопка "Continue" */}
      <div className="flex items-center justify-center py-3 bg-neutral-900 rounded-2xl">
        <button
          onClick={console.log(1 + 1)}
          className="text-xl font-medium text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
