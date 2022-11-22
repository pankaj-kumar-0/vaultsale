import React from 'react';
import '../Styles/HomeCard.css';

const HomeCard = ({item}) => {
  return (
    <div className='card' >
        <div className="circle_box">
            <div className="circle"></div>
        </div>
        <div className="text_box">
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
        </div>

      
    </div>
  )
}

export default HomeCard;
