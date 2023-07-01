import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "../Images/logo.svg";
import { ReactComponent as LogoMobile } from "../Images/logo-mobile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo desktop">
        <Logo />
      </div>
      <div className="logo mobile">
        <LogoMobile />
      </div>
      <div className="header-icons">
        <FontAwesomeIcon
          icon="fa-solid fa-house"
          style={{ color: "#6c3c93" }}
        />{" "}
        <FontAwesomeIcon icon="fa-solid fa-user" style={{ color: "#6c3c93" }} />
        <FontAwesomeIcon
          icon="fa-solid fa-share-nodes"
          style={{ color: "#6c3c93" }}
        />
      </div>
    </header>
  );
};

export default Header;
