import { useState } from "react";

function ExpensesBar({ amount, text, height, isCurrentDay }) {
  // use display state to show/hide the amount
  const [display, setDisplay] = useState("none");

  // color of the current day
  const cyan = "hsl(186, 34%, 60%)";

  // shows the amount
  function showAmount() {
    setDisplay("block");
  }

  //hides the amount
  function hideAmount() {
    setDisplay("none");
  }

  return (
    <div className="expenses-bar">
      <div className="bar-holder">
        <div
          // on mouseEnter show the amount
          onMouseEnter={showAmount}
          // on mouseLeave hide the amount
          onMouseLeave={hideAmount}
          className="bar"
          // set height and
          // if currentDay property is true, set the background color to cyan
          style={{
            height: height + "%",
            backgroundColor: isCurrentDay && cyan,
          }}
        >
          <p className="amount" style={{ display: display }}>
            ${amount}
          </p>
        </div>
      </div>
      <p className="text">{text}</p>
    </div>
  );
}

// default properties
ExpensesBar.defaultProps = {
  currentDay: false,
};

export default ExpensesBar;
