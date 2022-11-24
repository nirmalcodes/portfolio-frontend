import React from "react";
import NiNavbar from "../NiNavbar/NiNavbar";
import NiFooter from "../NiFooter/NiFooter";

const Layout = (props) => {
  return (
    <>
      <NiNavbar links={props.navLinks}/>
      <>{props.children}</>
      <NiFooter />
    </>
  );
};

export default Layout;
