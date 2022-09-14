import React from 'react'
import NavBar from '../shared/components/NavBar';
import "../../src/App.css";

const HomePage = () => {
  return (
      <>
    <div className="container mb-5">
        <NavBar />
        <img
          className='image'
          src="https://wallpapercave.com/wp/wp7637223.jpg"
          alt="avengers img"
        />
    </div>
      </>
  );
}

export default HomePage;