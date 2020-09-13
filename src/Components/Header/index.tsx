import Logo from "Components/Logo";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__icon">
          <Logo />
        </div>
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </header>
  );
};

export default Header;
