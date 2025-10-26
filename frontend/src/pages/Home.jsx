import React from 'react';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '89vh',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #fff9c4, #fffde7)', // light yellow gradient
      fontFamily: 'Arial, sans-serif',
      padding: '0 20px'
    }}>
      <h1 style={{
        color: '#f57f17',   // warm yellow/orange
        fontSize: '5rem',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        Welcome to TastyQuest!
      </h1>

      <h3 style={{
        color: '#333',       // readable on yellow
        fontSize: '1.8rem',
        maxWidth: '600px',
        lineHeight: '1.5'
      }}>
        Discover recipes that match your cravings — quick, delicious, and made just for you.
      </h3>

       <button style={{
        backgroundColor: '#f57f17',   // matching heading color
        color: '#fff',
        fontSize: '1.5rem',
        padding: '0.8rem 2rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.2s'
      }}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Explore
      </button>
    </div>
  );
}

export default Home;
