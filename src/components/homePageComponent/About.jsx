import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="padding py-14 flex max-lg:flex-col justify-between max-lg:gap-10">
      <div className="lg:w-1/2 space-y-5">
        <h5 className="yellow-head">
          WELCOME TO REGISTERKARO.IN
        </h5>
        <h2 className="head-two">
          About <span className="text-custom-orange">Register Karo</span>
        </h2>
        <p className="text-lg text-zinc-700">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations. <br /><br />I would strongly recommend their
          services to any organization that is looking for solid, reliable, and
          predictable outcomes.
        </p>
        <button className="btn bg-custom-blue flex items-center gap-2">Learn More <FaRegArrowAltCircleRight size={16} /></button>
      </div>
      <div className="lg:w-[45%]">
        <div className="">
            <img className="h-full w-full object-cover" src="./public/images/about-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
