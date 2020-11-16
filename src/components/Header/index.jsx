import React, { useState } from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="YouTube Logo"
          />
        </Link>        
      </div>

      <div className="header-input">
        <input 
          onChange={e => setInputSearch(e.target.value)} 
          value={inputSearch} 
          placeholder="Pesquisar" 
          type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-input-button" />        
        </Link>
      </div>

      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          alt="Profile Picture"
          src="https://lh3.googleusercontent.com/a-/AOh14GjfyMZBcCQy5OX6eB362IJFb81UTN4fSrWYgpo3=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
