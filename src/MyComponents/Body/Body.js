import { Avatar } from "@material-ui/core";
import React from "react";
import "./Body.css";
import { useStyles } from "../CustomMaterialStyles/Styles";
import { MicRounded, MoreVert, Search } from "@material-ui/icons";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const Body = () => {
  const customStyle = useStyles();
  return (
    <div className="body">
      <div className="body_header_sticky">
        <div className="body_header">
          <div className="body_header_left">
            <Avatar className={customStyle.large} />
            <div className="body_header_left_details">
              <strong>CSE-B</strong>
              <p>me,mukka,varun,salman,mallu</p>
            </div>
          </div>
          <div className="body_header_right">
            <Search fontSize="large" />
            <MoreVert fontSize="large" />
          </div>
        </div>
      </div>
      <div className="body_chat"></div>
      <div className="body_footer">
        <div className="footer">
          <div className="footer_left">
            <SentimentVerySatisfiedIcon fontSize="large" />
            <AttachFileIcon fontSize="large" />
          </div>
          <div className="footer_center">
            <input type="text" />
          </div>
          <div className="footer_right">
            <MicRounded fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
