import React from "react";

const OurClientBottom = () => {
  const clientData = [
    {
      icon: "./public/images/client-icon1.png",
      color: "#EB5757",
      description: "Fill up Application Form",
    },
    {
      icon: "./public/images/client-icon2.png",
      color: "#27AE60",
      description: "Make Online Payment",
    },
    {
      icon: "./public/images/client-icon3.png",
      color: "#F2994A",
      description: "Executive will Process Application",
    },
    {
      icon: "./public/images/client-icon4.png",
      color: "#828282",
      description: "Get Confirm Mail",
    },
  ];
  return (
    <div className="padding py-14 bg-custom-orange ">
      <ul className="flex gap-4 w-full flex-wrap">
        {clientData.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className={`h-16 w-16 rounded-full  z-50 p-3 ${item.color}`}>
              <img className="h-full w-full" src={item.icon} alt="" />
            </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurClientBottom;
