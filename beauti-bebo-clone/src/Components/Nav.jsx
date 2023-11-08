import React from 'react'
import '../index.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className="manu">
      <select placeholder='Mackup'> <option value="Mackup">Mackup</option></select>
      <select placeholder='Skin'><option value="Skin">Skin</option></select>

      <select placeholder='Hair'><option value="Hair">Hair</option></select>
      <select placeholder='Personal Care'><option value="PersonalCare">Personal Care</option></select>
      <select placeholder='Mom & Baby Care'><option value="Mom-baby-care">Mom & Baby Care</option></select>
      <select placeholder='Fragrance'><option value="Fragrance">Fragrance</option></select>
      <select placeholder='Women Fashion'><option value="Women-fashion">Women Fashion</option></select>
      <select placeholder='Women Brands'><option value="Women-brand">Women Brand</option></select>
      </div>
      <div className="cart"></div>
    </div>
  )
}

export default Nav
