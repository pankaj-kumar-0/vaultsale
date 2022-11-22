import React from "react";
import "../Styles/Home.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import HomeCard from "../components/HomeCard";
import cards from "../Data/HomeCardData";

const Home = () => {
  return (
    <div className="home_section">
      <Heading text="Welcome to VAULTSALE" />

      <p className="pera">
        VaultSale helps everyone to create their own tokens and token sales in
        few seconds. Tokens created on PinkSale will be verified and published
        on explorer websites.
      </p>
      <div className="btn_group">
        <Button type="type1" text="Create Now" />
        <Button type="type2" text="Learn More" />
      </div>
      
        <Heading text="A Suite of Tools for Token Sales" />

      <div className="cards_box">
        {cards.map((item, index) => (
          <HomeCard key={index} item={item} />
        ))}
      </div>
    </div>
    
  );
};

export default Home;
