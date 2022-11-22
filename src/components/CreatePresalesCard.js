import React from "react";
import "../Styles/CreatePresalesCard.css";

const CreatePresalesCard = ({item}) => {
  return (
    <div className="create_presales_card">
      <div className="create_presales_card_box1">
        <div className="number">{item.number}</div>
      </div>
      <div className="create_presales_card_box2">
        <div className="heading">{item.heading}</div>
        <div className="text">{item.text}</div>
      </div>
    </div>
  );
};

export default CreatePresalesCard;
