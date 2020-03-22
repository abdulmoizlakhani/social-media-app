import React from "react";
import Logo from "../../assets/logo/logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import MenuIcon from "../../assets/icons/menu.svg";

const AppHeader = props => {
  return (
    <div className={`app__header ${props["appHeaderClass"]}`}>
      <div className="app__header__logo__container">
        <img
          src={Logo}
          className="app__header__logo app__header__option_icon"
          alt="company logo"
        />
      </div>
      <div className="app__header__options__container">
        <div className="app__header__option">
          <img
            src={SearchIcon}
            className="app__header__option_icon"
            alt="company logo"
          />
        </div>
        <div className="app__header__option">
          <img
            src={MenuIcon}
            className="app__header__option_icon"
            alt="company logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
