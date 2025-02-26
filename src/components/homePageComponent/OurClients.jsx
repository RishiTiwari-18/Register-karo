import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurClients = () => {
  return (
    <div className=" py-8 space-y-16 lg:py-16">
      <div className="w-full padding flex flex-col items-center gap-4">
        <h3 className="text-4xl font-semibold">Our Happy Clients</h3>
        <p className="text-center md:w-3/5 text-lg text-zinc-600">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>
      <>
        <div className="w-full">
          <img loading="lazy" className="w-full" src="/images/Pagination.png" alt="" />
        </div>
        <div className="w-full flex justify-center">
          <button className="flex items-center gap-2 text-custom-blue font-semibold">
            Show more <FaArrowRight />
          </button>
        </div>
      </>
    </div>
  );
};

export default OurClients;
