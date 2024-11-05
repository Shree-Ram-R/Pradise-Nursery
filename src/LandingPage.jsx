import React from 'react';
import { Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="left-side">
          <h1>Welcome to Paradise Nursery</h1>
          <Link to="/ProductPage" className="get-started-btn">Get Started</Link>
        </div>
        <div className="right-side">
          <p></p>Welcome to Paradise Nursery! We are your ultimate destination for the finest selection of houseplants, bringing the beauty of nature right to your home. Our carefully curated collection features a diverse range of plants, from vibrant greens to stunning flowering varieties, all selected for their quality and beauty. At Paradise Nursery, we believe that every space can be transformed into a tranquil oasis, and we are dedicated to helping you find the perfect plants to enhance your living environment. Whether you're a seasoned plant enthusiast or just starting your green journey, we provide the tools and knowledge you need to nurture and grow your indoor garden. Shop with us today and experience the joy of bringing nature into your life!
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
