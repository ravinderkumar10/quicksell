import React from "react";
import "./GroupTitle.css";

function GroupTitle({ title, ticketCount }) {
  return (
      <div className="group-title">
          <div className="icon"> {/* Your icon here */} </div>
          <div className="title">{title}</div>
          
          <div className="progress-count">
              <div className="progress"> {/* Your progress icon/label here */} </div>
              <div className="count">{ticketCount}</div>
          </div>
          
          <div className="icon-buttons">
              {/* Your icon buttons here */}
          </div>
      </div>
  );
}

export default GroupTitle;
