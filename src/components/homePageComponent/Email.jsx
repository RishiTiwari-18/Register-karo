import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Email = () => {
  return (
    <div className="padding py-14 text-white space-y-8 bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
      <div className="text-center space-y-2">
        <h5 className="text-lg">1% OF THE INDUSTRY</h5>
        <h3 className="head-two">Welcome to your new digital reality. Now.</h3>
      </div>
      <div className="flex justify-center ">
        <div className="flex bg-white rounded-md overflow-hidden w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 text-gray-800 focus:outline-none"
          />
          <button className="bg-custom-orange px-6 py-2.5 font-semibold ">
            Submit
          </button>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4">
        {["instant results", "User-friendly interface", "Personalized customization"].map((item, index) => (
            <p key={index} className="flex items-center gap-2"><FaCheckCircle />{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Email;
