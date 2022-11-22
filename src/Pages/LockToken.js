import React from "react";
import "../Styles/LockToken.css";
import Heading from "../components/Heading";
import Button from "../components/Button";

const LockToken = () => {
  return (
    <div className="lock_token">
      <Heading text="Lock Token /LP" />
      <p>
        Lock your token/lp to earn magical unicorns that poop out money. Be
        aware, they might bite.
      </p>

      <div className="lock_token_box">
        <label className="label_input">token or lp token address</label>
        <input className="area_input" type="text" />

        <label className="label_input">amount</label>
        <input className="area_input" type="number" />

        <label className="label_input">lock until</label>
        <input className="area_input" type="date" />
        <hr className="line" />
        <div className="button_box">
          <div className="link_box">
            Have question <span>View guide</span>
          </div>
          <div className="button_group">
            <Button type="type1" text="Approve Token" />
            <Button type="type1" text="Lock Token" />
          </div>
        </div>
      </div>
      <div className="lower_info">
        Some sort of disclaimer can go here if necessary. Some sort of
        disclaimer can go here if necessary. Some sort of disclaimer can go here
        if necessary.
      </div>
    </div>
  );
};

export default LockToken;
