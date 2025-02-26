import React from 'react'

const Why = () => {

  const whyData = [
    {
      icon: "/images/why-icon1.png",
      color: "#FEF3EF",
      heading: "Confidential & Safe",
      description: "All your private information is safe with us"
    },
    {
      icon: "/images/why-icon2.png",
      color: "#F1FBF3",
      heading: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions"
    },
    {
      icon: "/images/why-icon3.png",
      color: "#EDF3FF",
      heading: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services"
    },
    {
      icon: "/images/why-icon4.png",
      color: "#FBF1FB",
      heading: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals"
    },
    {
      icon: "/images/why-icon5.png",
      color: "#27AE600A",
      heading: "Confidential & Safe",
      description: "All your private information is safe with us"
    }
  ];

  return (
    <div className='padding py-8 lg:py-20 bg-white'>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 space-y-3">
          <h5 className='yellow-head'>WHY REGISTERKARO.IN</h5>
          <h2 className='head-two'>Why Choose Register Karo</h2>
          <p className='text-lg text-zinc-700'>It is with consistent services and results that build trust with the people and that in
          turn help us to serve the business better.</p>
        </div>
        
        {whyData.slice(0, 2).map((item, index) => (
          <div key={index} className="p-6 rounded-lg text-center" style={{ backgroundColor: item.color }}>
            <img loading='lazy' src={item.icon} alt={item.heading} className="w-8 m-auto h-8 mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}

        <div className="max-lg:hidden col-span-1"></div>
        
        {whyData.slice(2).map((item, index) => (
          <div key={index} className="p-6 rounded-lg text-center" style={{ backgroundColor: item.color }}>
            <img loading='lazy' src={item.icon} alt={item.heading} className="w-8 h-8 m-auto mb-6"/>
            <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Why