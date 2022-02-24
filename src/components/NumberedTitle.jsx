import React from "react";

function NumberedTitle({ title, number }) {
  return (
    <h1 className="numbered-title">
      <span>{number}</span>
      {title}
    </h1>
  );
}

export default NumberedTitle;
