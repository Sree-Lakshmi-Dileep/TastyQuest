import React, { useState } from 'react';
import './styles.css';

const featuredCategories = [
  { name: 'Main course', image: 'https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=687&auto=format&fit=crop' },
  { name: 'Side dish', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop' },
  { name: 'Dessert', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=627&auto=format&fit=crop' },
  { name: 'Appetizer', image: 'https://media.istockphoto.com/id/1341503586/photo/fried-momos-dumpling.webp' },
  { name: 'Salad', image: 'https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Bread', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&auto=format&fit=crop' },
  { name: 'Breakfast', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop' },
  { name: 'Soup', image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=600&auto=format&fit=crop' },
  { name: 'Beverage', image: 'https://images.unsplash.com/photo-1662130187270-a4d52c700eb6?q=80&w=1102&auto=format&fit=crop' },
  { name: 'Snack', image: 'https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=600&auto=format&fit=crop' }
];

function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const visibleItems = featuredCategories.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < featuredCategories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navright">
          <h1>TastyQuest</h1>
        </div>
        <div className="navleft">
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Logout</h4>
        </div>
      </div>

      <div className="homecontent">
        <h1>Discover Delicious Recipes</h1>
        <p>Search for recipes by entering dish name.</p>
        <input type="text" placeholder="Search for recipes" className="search" />
        <button>Search</button>
      </div>

      <section className="featured-section">
        <h3 className="featured-heading">Featured Recipes</h3>
        <div className="slider-wrapper">
          <span className="arrow" onClick={handlePrev}>&#10094;</span>
          <div className="featured-slider">
            {visibleItems.map((item) => (
              <div className="featured-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <span className="arrow" onClick={handleNext}>&#10095;</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
