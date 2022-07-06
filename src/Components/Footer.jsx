import React from "react";
import ReactDOM from "react-dom/client";

function Footer(){
  var date= new Date();
  return (<footer>
    <div class="centered">
      <p>Made with ❤️ by Sutej</p>
      <a href="https://twitter.com/jeal0uspengu1n" class="fa fa-twitter fa-lg"></a>&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/jeal0uspengu1n" class="fa fa-github fa-lg"></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/sutejsharma/" class="fa fa-linkedin fa-lg"></a>&nbsp;&nbsp;&nbsp;
    </div>
  </footer>)
}

export default Footer;
