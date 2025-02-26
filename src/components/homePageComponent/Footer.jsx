import React from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  const footerData = [
    {
      heading: "START A BUSINESS",
      links: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ]
    },
    {
      heading: "GOVERNMENT REGISTRATION",
      links: [
        "Partners",
        "Community",
        "Developers",
        "App",
        "Blog",
      ]
    },
    {
      heading: "COMPLIANCE & TAX",
      links: [
        "Channels",
        "Scale",
        "Watch the Demo",
        "Our Competition",

      ]
    },
    {
      heading: "BIS & CDSCO",
      links: [
        "About Us",
        "News",
        "Leadership",
        "Media Kit",
      ]
    }
  ];

  return (
    <div className='px-4 sm:px-6 lg:px-8 bg-[#011B5B] text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 py-14'>
        <div className="md:col-span-2 space-y-4">
            <p className="text-gray-300 leading-relaxed md:w-[90%]">Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            <div className="flex items-center gap-4">
                <FaFacebook size={22} className="hover:text-custom-orange transition-colors cursor-pointer" />
                <FaGoogle size={22} className="hover:text-custom-orange transition-colors cursor-pointer" />
                <FaApple size={22} className="hover:text-custom-orange transition-colors cursor-pointer" />
                <GrInstagram size={22} className="hover:text-custom-orange transition-colors cursor-pointer" />
            </div>
        </div>
        {footerData.map((section, index) => (
            <div key={index} className="space-y-4">
                <h4 className="font-semibold text-custom-orange text-lg">{section.heading}</h4>
                <ul className="space-y-3">
                    {section.links.map((link, idx) => (
                        <li key={idx} className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Footer