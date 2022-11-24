import React from "react";
import "./CommonCard.css";

const CommonCard = (props) => {
  return (
    <div
      className="common_card"
      style={{
        padding: props.padding,
      }}
    >
      {props.children}
    </div>
  );
};

export default CommonCard;
