import React from "react";

function Component1refs() {
  let buttonRef = React.createRef();

  const makeButtonRed = (e) => {
    e.target.classList.add("red-button");
    buttonRef.current.classList.add("red-button");
  };

  return (
    <div className="container container-line">
      <h1>Refs</h1>
      <button ref={buttonRef} onClick={makeButtonRed}>
        Make it red
      </button>
    </div>
  );
}

export default Component1refs;
