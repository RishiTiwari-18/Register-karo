import React from "react";

const TrustedBy = () => {
  return (
    <div className="py-10 md:py-20 flex flex-col justify-center items-center gap-8">
      <h3 className="text-2xl font-semibold text-center">Trusted By Over 100+ Startups and freelance business</h3>
      <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        <li className="h-4">
          <img
            className="h-full w-full object-cover"
            src="./public/images/oracle.png"
            alt=""
          />
        </li>
        <li className=" w-44">
          <img
            className="h-full w-full object-contain"
            src="./public/images/morpheus.png"
            alt=""
          />
        </li>
        <li className="h-4">
          <img
            className="h-full w-full object-contain"
            src="./public/images/samsung.png"
            alt=""
          />
        </li>
        <li className="h-4">
          <img
            className="h-full w-full object-contain"
            src="./public/images/monday.png"
            alt=""
          />
        </li>
        <li className="h-4">
          <img
            className="h-full w-full object-contain"
            src="./public/images/segment.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default TrustedBy;
