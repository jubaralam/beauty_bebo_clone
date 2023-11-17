import "./Navbar.css";
import './utility.css'
import react from "react";
import { useState } from "react";
const navItem = [
  "MACKUP",
  "SKIN",
  "HAIR",
  " PERSONAL CARE",
  "MOM & BABY PRODUCT",
  "FRAGRANCE",
  "WOMEN FASHION",
  "BRANDS",
];
const logos = [
  'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png',
  'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png',
  'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png',
  'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png',
  'https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png',
  'https://www.beautybebo.com/pub/media/fragrance.png',
  'https://www.beautybebo.com/pub/media/ayurveda.png',
  'https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'
]
function Nav() {
  const [cartAmount, setCartAmount] = useState(1000);

  return (
    <div className="navContainer">
      <div className="navItems">
        <ul>
          {navItem.map((e) => {
            return <li className="elements">{e} </li>;
          })}
        </ul>
      </div>
      <div className="cartComp">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-bag-airport-kiranshastry-solid-kiranshastry.png"
          alt="external-bag-airport-kiranshastry-solid-kiranshastry"
        />
        <div className="cartTitle">
          My Cart <span> - ₹{cartAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;

export function SubNavbar() {
  return <>
  <div className="d-flex j-between subNav">

  <ul className="d-flex mx-auto full-w j-between a-center">
    {navItem.map((e,i)=>{
      return <div className="navbar  px-10 py-10">
     
     {<img src={logos[i]} alt={i} /> }
      <li className="subNav elements">{e} </li>
     </div>

})}
  </ul>
</div>
  </>;
}
