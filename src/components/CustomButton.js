import React from "react";

export function CustomButton(props) {
  const { text, action } = props;
  return (
    <>
      <button className="pure-material-button" onClick={action}>
        {text}
      </button>
    </>
  );
}
