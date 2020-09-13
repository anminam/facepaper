import Logo from "Components/Logo";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import GroupIcon from "@material-ui/icons/Group";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Avatar } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import AlarmIcon from "@material-ui/icons/Alarm";
import SettingsIcon from "@material-ui/icons/Settings";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__icon">
          <Logo />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <ul className="header__pages">
          <li className="header__pages__option">
            <div>
              <HomeIcon />
            </div>
          </li>
          <li className="header__pages__option">
            <div>
              <VideoLibraryIcon />
            </div>
          </li>
          <li className="header__pages__option">
            <div>
              <GroupIcon />
            </div>
          </li>
          <li className="header__pages__option">
            <div>
              <SportsEsportsIcon />
            </div>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="header__right">
        <ul className="header__options">
          <li className="header__options__option">
            <div className="header__naming">
              <Avatar />
              <h3>Anminam</h3>
            </div>
          </li>
          <li className="header__options__option">
            <div className="">
              <MessageIcon />
            </div>
          </li>
          <li className="header__options__option">
            <div className="">
              <AlarmIcon />
            </div>
          </li>
          <li className="header__options__option">
            <div className="">
              <SettingsIcon />
            </div>
          </li>
        </ul>
      </div>
      {/* end */}
    </header>
  );
};

export default Header;
