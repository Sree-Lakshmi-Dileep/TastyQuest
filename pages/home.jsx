import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'


const featuredCategories = [
  { name: 'Spaghetti', image: 'https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Salad', image: 'https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Curry', image: 'https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Pepperoni', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function Home() {
  return (
    <div className='container'>
      <div className="navbar">
        <h1>TastyQuest</h1>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Logout</h4>
      </div>
      <div className="homecontent">
        <h1>Discover Delicious Recipes</h1>
        <p>Search for recepies by entering dish name.</p>
        <input type="text" placeholder='Search for recipes'/>
        <button>Search</button>
      </div>
      <section style={{ marginTop: '4rem' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Featured Recipes</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          {featuredCategories.map((item) => (
            <div
              key={item.name}
              onClick={() => handleCategoryClick(item.name)}
              style={{
                cursor: 'pointer',
                textAlign: 'center',
                width: '150px'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;
