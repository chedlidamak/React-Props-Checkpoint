import React from "react";

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    alert("Chedli Damak");
  }
  return (
    <a href="/" onClick={handleClick}>
      What's my name?
    </a>
  );
};

export default ActionLink;
