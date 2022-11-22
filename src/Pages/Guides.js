import React from "react";
import "../Styles/Guides.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import cards from "../Data/GuidesCardsdata";
import GuidesCard from "../components/GuidesCard";

const Guides = () => {
  return (
    <div className="guide_page">
      <Heading text="Tockenize your passion!" />
      <p>Create custom tokens with no codes. Launching and locking services.</p>
      <div className="buttons">
        <Button type="type1" text="Create Token" />
        <Button type="type1" text="Create Sale" />
        <Button type="type1" text="Learn More" />
      </div>

      <Heading text="A Suite of Tools for Token Sales" />

      <div className="gudie_card_box">
      {cards.map((item, index) => (
          <GuidesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Guides;
