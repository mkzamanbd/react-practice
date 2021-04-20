import React from "react";
import image from "./404.jpg";
function NotFound() {
    return (
        <div className="container">
            <img src={image} alt="" className="img-fluid" />
        </div>
    );
}

export default NotFound;
