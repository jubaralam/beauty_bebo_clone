import React, { useState } from "react";
import "./HeroSec.css";

const HeroSec = () => {
  const navItem = [
    "Mackup",
    "Skin",
    "Hair",
    " Personal Care",
    "Mom & Baby Care",
    "Fragrance",
    "Ayurveda",
  ];
  const heroImg = [
    "https://www.beautybebo.com/pub/media/ads/slider-2.png",
    "https://www.beautybebo.com/pub/media/ads/slidrr.png",
    "https://www.beautybebo.com/pub/media/ads/slider_1.png",
  ];
  const logos = [
    'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png',
    'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png',
    'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png',
    'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png',
    'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png',
    'https://www.beautybebo.com/pub/media/fragrance.png',
    'https://www.beautybebo.com/pub/media/ayurveda.png'
  ]
 const [index, setindex] = useState(0)
   setInterval(() => {
    if(index===0 && index<=heroImg.length){

        setindex(index+ 1 )
    }else{
setindex(0)
    }
   }, 3000);
const active ={
    // width: "20px",
    backgroundColor: 'rgb(221,2,133)'

}
  return (
    <div className="HeroContainer">

          <div className="Category">
      <h1>ALL CATEGORIES</h1>
      <ul>
        {navItem.map((e,i) => {
          return <div className="sidebar">
<img src={logos[i]} alt="Logo pic" />
              <li>{e}</li>
          </div>
        })}
      </ul>

      </div>
      <div className="featureImg">
        <img src={heroImg[index]} alt="" />
        <span className="dots">{heroImg.map((e,i)=>{
          return  <div className="owl" style={active}></div>
        })}</span>
      </div>
    </div>
  );
};

export default HeroSec;
