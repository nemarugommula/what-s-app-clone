import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChatProfile.css";
import { useStyles } from "../CustomMaterialStyles/Styles";

const ChatProfile = () => {
  const classes = useStyles();

  return (
    <div className="chatprofile">
      <Avatar className={classes.large} />
      <div className="chatprofile_details">
        <strong>CSE-B</strong>
        <p>You removed from chat!!</p>
      </div>
    </div>
  );
};

export default ChatProfile;
