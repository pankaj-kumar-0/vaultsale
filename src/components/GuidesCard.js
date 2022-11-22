import React from 'react';
import "../Styles/GuidesCard.css";

const GuidesCard = ({item}) => {
  return (
    <div className="guide_card">
            <h1>{item.heading}</h1>
            <div className='guide_card_text'>{item.text}</div>
    </div>
  )
}

export default GuidesCard;
