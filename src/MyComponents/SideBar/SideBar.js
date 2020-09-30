import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import MessageIcon from "@material-ui/icons/Message";
import CachedIcon from "@material-ui/icons/Cached";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import ChatProfile from "../ChatProfile/ChatProfile";
import { useStyles } from "../CustomMaterialStyles/Styles";

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <div className="sidebar_sticky">
        <div className="sidebar_header">
          <Avatar className={classes.large} />
          <div className="sidebar_header_options">
            <CachedIcon fontSize="large" />
            <MessageIcon fontSize="large" />
            <MoreVertIcon fontSize="large" />
          </div>
        </div>
        <div className="sidebar_header_search">
          <div className="sidebar_header_search_adjust">
            <SearchOutlined fontSize="large" />
            <input type="text" />
          </div>
        </div>
      </div>
      <hr className="sidebar_hr" />
      <div className="sidebar_chatlist">
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
        <ChatProfile />
      </div>
    </div>
  );
};

export default SideBar;
