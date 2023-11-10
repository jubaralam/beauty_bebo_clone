
import './Navbar.css'
import react from "react";
import { useState } from "react";

function Nav() {
  const [cartAmount, setCartAmount] = useState(1000);
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
