import React from "react";

/**
 * Component for the footer content
 * 
 * @component
 * @example
 * return (
  *   <Footer />
  * )
  */
function Footer() {
  return (
    <div className="footer">
      <p>
        Made by Earl Jay Caoile<br/>
        for Code Fellows JS 401 Nights
      </p>
      <div className="links">
      <a href="https://www.linkedin.com/in/earl-jay-caoile/">
        <i>LinkedIn</i>
      </a>
      <a href="https://github.com/ecaoile/">
        <i>GitHub</i>
      </a>
      </div>
    </div>
  );
}

export default Footer;
