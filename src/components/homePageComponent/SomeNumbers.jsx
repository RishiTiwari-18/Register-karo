import React from "react";

const SomeNumbers = () => {
  const numbersData = [
    { number: "1M", name: "Customers" },
    { number: "12", name: "Years of Excellence" },
    { number: "41", name: "R&D Engineers" },
    { number: "78", name: "Countries" },
    { number: "3287", name: "PARTNERS" },
    { number: "41", name: "Awards ReceivedTeam Members" }
  ];

  return (
    <div className="padding space-y-12 py-14">
      <div className="text-center space-y-4">
        <h5 className="yellow-head">FAQ</h5>
        <h3 className="head-two">Frequent Ask Questions </h3>
      </div>

      <div className="flex items-center justify-around">
        {numbersData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <span className="text-4xl font-bold bg-gradient-to-br from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">{item.number}+</span>
            </div>
            <p className="font-semibold mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeNumbers;
