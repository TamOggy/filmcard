import React from 'react'
import './style.css'

const AnimeCardComponent = (props) => {
  const { title, episode, img, description} = props
  const {setMaincard} = props

  
  const handleClick = () => {
    setMaincard({ movieName: title, episode, image: img, description});
  };

  return (
    <div className="anime-card" onClick={handleClick}>
      <div className="anime-card-episode">Episode {episode}</div>
      <img src={img} alt={title} className="anime-card-image-item" />
      <div className="anime-card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default AnimeCardComponent
