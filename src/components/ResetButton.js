import React from "react";

export function ResetButton(props) {
  const { refs } = props;

  const handleClick = () => {
    refs.ref1.current.disabled = false;
    refs.ref2.current.disabled = false;
    refs.ref3.current.disabled = false;
  };
  console.log(refs);

  return (
    <>
      <button onClick={handleClick} className="resetButton">
        Reset !
      </button>
    </>
  );
}
