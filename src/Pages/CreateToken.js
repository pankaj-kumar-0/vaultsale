import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import "../Styles/CreateToken.css";
import logo from "../Assets/Images/logo1.png";

const CreateToken = () => {
  return (
    <div className="create_token_page">
      <Heading text="Create Token (Mint Token)" />

      <div className="pera">
        Create and Mint a token on BSC using VaultSale's platform and receive a
        free token certificate to share with your connections.
      </div>

      <div className="token_container">
        <div className="token_box">
          <div className="form_box">
            <div className="col">
              <label className="label_input">token name</label>
              <input className="area_input" type="text" />
            </div>
            <div className="col">
              <label className="label_input">number of decimals</label>
              <input className="area_input" type="text" />
            </div>
            <div className="col">
              <label className="label_input">total suply</label>
              <input className="area_input" type="text" />
            </div>
            <div className="col">
              <label className="label_input">ticker symbol</label>
              <input className="area_input" type="text" />
            </div>
            <hr className="line" />
            <div className="button_box">
              <div className="link_box">
                Have question <span>View guide</span>
              </div>
              <div className="button_group">
                <Button type="type1" text="Submit" />
              </div>
            </div>
          </div>
        </div>
        <div className="token_card">
          <div className="Token_card_text" id="token_name">
            Token Name
          </div>
          <div className="token_box1">
            <div className="Token_card_text" id="declaims">
              Declaims
            </div>
            <div className="Token_card_text" id="total_suply">
              Total Suply
            </div>
          </div>
          <div className="token_box1">
            <img src={logo} alt="" />
            <div className="Token_card_text" id="symbol">
              Symbol
            </div>
          </div>
          <div className="Token_card_text" id="lower_heading">
            Created with VaultSale
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;
