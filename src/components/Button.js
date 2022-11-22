import React from "react";
import "../Styles/Button.css";

const Button = ({ text, type }) => {
  if (type == "type1") {
    return (
      <>
        <button id="type1">{text}</button>
      </>
    );
  }

  else if(type == "type2"){
    return (
        <>
        <button id='type2' >{text}</button>
        </>
      )
  }
  else if(type == "type3"){
    return (
        <>
        <button id='type3' >{text}</button>
        </>
      )
  }


};

export default Button;
