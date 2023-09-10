import React from "react";
import UserInfo from "../components/contact/UserInfo";

// Компонент сторінки "Контакт"
const Contact = () => {
  return (
    <div className="flex h-screen bg-white bg-opacity-0 rounded-2xl backdrop-blur-[90px] gap-[10px] text-black pt-16 mb-9 justify-center">
      {/* Інформація про користувача */}
      <UserInfo />

      {/* Right Contact Section */}
      <div className="flex max-w-lg flex-col flex-grow justify-between px-12 py-[60px] bg-zinc-100 rounded-2xl gap-8 overflow-hidden">
        <div className="text-[40px] font-semibold">For comment or question</div>
        <div className="drop-shadow-md bg-white rounded-2xl h-full p-[30px] flex flex-col gap-2.5">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full h-full text-md text-zinc-400 tracking-wide outline-none leading-relaxed"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-center py-3 bg-neutral-900 rounded-2xl w-full">
          <button className="text-xl font-medium text-white">Send</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[300px] h-full rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/564x/0c/db/74/0cdb74f557a73a068beeebd2a85f5b13.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
