import React from "react";

const Review = ({ count, text, author }) => {
  const array = Array.from({ length: count });
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:max-w-111 md:gap-8">
      <ul className="flex">
        {array.map((_, index) => {
          return (
            <li key={index}>
              <img src="/public/Reviews/star.svg" alt="" />
            </li>
          );
        })}
      </ul>
      <p className="text-center text-[18px] leading-8">{text}</p>
      <img src={author} alt="author" />
    </div>
  );
};

export default Review;
