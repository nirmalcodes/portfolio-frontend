import React from "react";
import "./NiFooter.css";

const NiFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="copyrights">
          ©{new Date().getFullYear()} Nirmal. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default NiFooter;
