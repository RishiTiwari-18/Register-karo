import React from 'react'

const Services = () => {

  const servicesData = [
    {
      icon: "/images/services-icon1.png",
      heading: "Company Formation",
      description: "Build web-based solutions that enhance customer experience."
    },
    {
      icon: "/images/services-icon2.png",
      heading: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals."
    },
    {
      icon: "/images/services-icon3.png",
      heading: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market."
    },
    {
      icon: "/images/services-icon4.png",
      heading: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts."
    },
    {
      icon: "/images/services-icon5.png",
      heading: "Payroll Services",
      description: "Expand your business across the globe with minimal effort."
    },
    {
      icon: "/images/services-icon6.png",
      heading: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology."
    }
  ];

  return (
    <div className='padding p-10 bg-[#FAFAFA]'>
        <div className="flex flex-col gap-4 items-center justify-center">
            <h4 className='yellow-head'>WELCOME TO REGISTERKARO.IN</h4>
            <h3 className='head-two'>Explore Our Services</h3>
        </div>
        <div className="grid lg:px-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {servicesData.map((service, index) => (
                <div key={index} className="p-6 text-center space-y-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img loading='lazy' src={service.icon} alt={service.heading} className="w-16 h-16 mx-auto" />
                    <h4 className="text-xl font-bold">{service.heading}</h4>
                    <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services