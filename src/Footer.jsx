import React from "react";
import ReactDOM from "react-dom/client";

function Footer(){
  var date= new Date();
  return (<footer>
    <p>Copyright © {date.getFullYear()}</p>
  </footer>)
}

export default Footer;
