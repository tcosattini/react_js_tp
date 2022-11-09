import React, { useState } from "react";

export const CustomButtonAlt = React.forwardRef((props, ref) => {
  const { text, id } = props;
  const [disabled, setDisabled] = useState(false);

  const handleClick = (ref) => {
    setDisabled(true);
    ref.current.disabled = true;
  };

  return (
    <>
      <button
        id={id}
        ref={ref}
        onClick={() => handleClick(ref)}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
});
