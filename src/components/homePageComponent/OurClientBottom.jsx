import React from "react";

const OurClientBottom = () => {
  const clientData = [
    {
      icon: "/images/client-icon1.png",
      color: "#EB5757",
      description: "Fill up Application Form",
    },
    {
      icon: "/images/client-icon2.png",
      color: "#27AE60",
      description: "Make Online Payment",
    },
    {
      icon: "/images/client-icon3.png",
      color: "#F2994A",
      description: "Executive will Process Application",
    },
    {
      icon: "/images/client-icon4.png",
      color: "#828282",
      description: "Get Confirm Mail",
    },
  ];
  return (
    <div className="padding py-14 bg-custom-orange">
      <ul className="flex w-full flex-wrap md:justify-center md:gap-10">
        {clientData.map((item, index) => (
          <li key={index} className="flex items-center gap-4 p-4">
            <div className="h-12 w-12 rounded-full p-3" style={{ backgroundColor: item.color }}>
              <img loading="lazy" className="h-full w-full" src={item.icon} alt={item.description} />
            </div>
            <p className="font-medium">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurClientBottom;
