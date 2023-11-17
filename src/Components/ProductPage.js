import React, { useState } from 'react';
import './ProductData'

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} items to the cart!`);
    // You would typically perform an API request to add the product to the cart.
  };

  return (
    <div className="product-page">
      <header>
        <div className="logo">Your Logo</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="cart">
          <span>Cart (0)</span>
        </div>
      </header>

      <section className="product">
        <div className="product-image">
          <img src="product-image.jpg" alt="Product Name" />
        </div>
        <div className="product-details">
          <h1>Product Name</h1>
          <p className="price">$99.99</p>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>

      <section className="description">
        <h2>Description</h2>
        <p>This is a brief description of the product.</p>
      </section>

      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="customer-review">
          <p>Rating: 4/5</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
