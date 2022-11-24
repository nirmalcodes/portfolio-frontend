import React from "react";
import "./NiCard.css";
import { images } from "../../constants";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const NiCard = ({ name, date, image, preview, github }) => {
  return (
    <div className="work_card">
      <div className="work_card-header">
        <img
          src={image ? image : images.about02}
          alt={name ? name : "Work Image"}
          loading="lazy"
        />
        <div className="overlay">
          {preview && (
            <a href={preview} target="_blank" rel="noreferrer">
              <AiOutlineLink /> Preview
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <AiOutlineGithub /> Github
            </a>
          )}
        </div>
      </div>
      <div className="work_card-body">
        <h4>{name ? name : "Undefined"}</h4>
        <p>{date ? date : "Undefined"}</p>
      </div>
    </div>
  );
};

export default NiCard;
