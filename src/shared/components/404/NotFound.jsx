import React from "react";
import "./style.css"
const NotFound = (props) => {
  console.log("PRopssss",props)
  return (
    <div className="not-found">
        <div className="not-found-body">
          <h2>404 | Page not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
