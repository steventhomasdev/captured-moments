import React from "react";
import "./header.css";
import {
  HomeOutlined,
  UserOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-icons">
        <HomeOutlined />
        <UserOutlined />
        <ShareAltOutlined />
      </div>
    </header>
  );
};

export default Header;
