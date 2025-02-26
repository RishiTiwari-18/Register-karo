import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Blogs = () => {
  const blogData = [
    {
      image: "./public/images/blog1.png",
      subHead: "Prabhash Mishra • 1 Jan 2023 • Today",
      head: "Small business & Startup ",
      disc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image: "./public/images/blog2.png",
      subHead: "Mahesh Kumar • 1 Jan 2023",
      head: "Scale-Up Company Offer",
      disc: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      image: "./public/images/blog3.png",
      subHead: "Rakhi Verma • 1 Jan 2023",
      head: "Growing Business Package",
      disc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      image: "./public/images/blog4.png",
      subHead: "Karan Kumar • 1 Jan 2023",
      head: "Scale-Up Company Offer",
      disc: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      image: "./public/images/blog5.png",
      subHead: "Taxation",
      head: "Income Tax Filing Guide",
      disc: "A complete guide to filing your income tax returns efficiently and on time.",
      tags: ["Tax", "Audit"],
    },
    {
      image: "./public/images/blog6.png",
      subHead: "Miss Nora• 1 Jan 2023",
      head: "Scale-Up Company Offer",
      disc: "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Customer Success"],
    },
  ];

  return (
    <div className="padding py-14">
      <div className="text-center space-y-4">
        <h5 className="yellow-head">EXPLORE OUR BLOGS</h5>
        <h3 className="head-two">Accelerate Digital Transformation</h3>
      </div>

      {/* Rendered Cards */}

      <div className="grid grid-cols-3 py-16 gap-8">
        {blogData.map((item, index) => (
          <div key={index}>
            <div className="relative aspect-video">
              <img
                className="h-full w-full rounded-md object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="space-y-3 pt-7">
              <h5 className="text-zinc-600 text-sm font-semibold">
                {item.subHead}
              </h5>
              <h3 className="text-xl font-bold flex items-center justify-between">
                {item.head} <FiArrowUpRight size={22} />
              </h3>
              <p className="text-zinc-600">{item.disc}</p>
              <div className="flex items-center gap-2 py-3">
                {item.tags.map((item, index) => (
                  <span key={index} className={`${(item === 'Tax & Audit' || item === 'Money') ? "bg-[#F9F5FF] text-[#6941C6]" : ""}
                  ${(item === 'Management' || item === "Tax" || item === 'Customer Success') ? "bg-[#F8F9FC] text-[#363F72]" : ""}
                  ${(item === 'Audit' || item === 'Compliance') ? "bg-[#FFF1F3] text-[#C01048]" : ""}
                  ${(item === 'Money Back' || item === 'Research') ? "bg-[#EEF4FF] text-[#3538CD]" : ""}
                   px-2.5 font-semibold rounded-full text-sm`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="w-full flex justify-center">
            <button className="btn bg-custom-blue flex items-center gap-2">Show more blogs <FaArrowRight /></button>
        </div>
      
    </div>
  );
};

export default Blogs;
