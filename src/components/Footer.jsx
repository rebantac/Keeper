import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ Rebanta {year}</p>
    </footer>
  );
}

export default Footer;
