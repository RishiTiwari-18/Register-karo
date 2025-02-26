import React from 'react'

const FooterTop = () => {
  const footerImages = [
    { src: "/images/bottom-icon1.png" },
    { src: "/images/bottom-icon2.png" },
    { src: "/images/bottom-icon3.png" },
    { src: "/images/bottom-icon4.png" },
    { src: "/images/bottom-icon5.png" }
  ];
  return (
    <div className="flex justify-evenly padding gap-14 flex-wrap py-14">
      {footerImages.map((image, index) => (
        <img loading='lazy' key={index} src={image.src} alt={`Footer Image ${index + 1}`} className="w-30 object-contain" />
      ))}
    </div>
  )
}

export default FooterTop