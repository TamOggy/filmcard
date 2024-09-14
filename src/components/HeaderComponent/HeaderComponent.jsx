import React from 'react'
import './style.css'

const HeaderComponent = (props) => {
  const {maincard} = props
  return (
    <>
    <div className='header-navbar'>
      <h3>Explore</h3>
      <h5>What are you gonna watch today ?</h5>
      </div>
        <div className="header">
          <img className="header-image" src={maincard.image} alt="Weather With You" />
          <div className="header-overlay">
            <h1>{maincard.movieName}</h1>
            <p>
              {maincard.description}
            </p>
          </div>
        </div>
        </>
  );
}

export default HeaderComponent
