import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const Questions = () => {
  return (
    <div className="padding bg-[#FAFAFA] py-14">
      <div className="text-center space-y-4">
        <h5 className="yellow-head">FAQ</h5>
        <h3 className="head-two">Frequent Ask Questions </h3>
      </div>

      <div className="flex flex-col gap-3 py-8  p-6 rounded-lg">
      {Array(5).fill().map((_, index) => (
        <div key={index} className="h-fit rounded-md flex justify-between bg-white shadow-md items-center px-6 py-4 cursor-pointer relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#FFA229] to-[#1C4670]"/>
          Can I recover deleted files from desktop with this software? 
          <FaAngleRight size={20} />
        </div>
      ))}
      </div>

      <div className="w-full flex justify-center">
            <button className="btn bg-custom-blue flex items-center gap-2">Show more <FaArrowRight /></button>
        </div>
    </div>
  );
};

export default Questions;
