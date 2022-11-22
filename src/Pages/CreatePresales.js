import React from "react";
import "../Styles/CreatePresales.css";
import Heading from "../components/Heading";
import CreatePresalesCard from "../components/CreatePresalesCard";
import data from "../Data/CreatePresalesCardData";
import Button from "../components/Button";

const CreatePresales = () => {
  return (
    <div className="create_presales">
      <div className="create_presales_box">
        <Heading text="Create LaunchPad" />
        <div className="cards_box">
          {data.map((item, index) => (
            <CreatePresalesCard key={index} item={item} />
          ))}
        </div>

        <div className="info_box">
          <p>First Let's Verify your location </p>
          <p>
            Enter the token address of token you'd like to create a VaultSale
            launch pad for and ensure your information is correct.
          </p>
          <label className="label_input">token address</label>
          <input className="area_input" type="text" />
          <hr className="line" />
          <div className="button_box">
            <div className="link_box">
              Have question <span>View guide</span>
            </div>
            <div className="button_group">
              <Button type="type1" text="Start Over" />
              <Button type="type1" text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePresales;
