import React from "react";
import Button from "./Button";

function Footer({ next }) {
  return (
    <div className="footer">
      <Button next={next} />
    </div>
  );
}

export default Footer;
