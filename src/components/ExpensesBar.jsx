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
    <tr className="expenses-bar">
      <td className="bar-holder" style={{ width: "100%" }}>
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
          <div className="amount" style={{ display: display }}>
            ${amount}
          </div>
        </div>
      </td>
      <th className="text" scope="row">
        {text}
      </th>
    </tr>
  );
}

// default properties
ExpensesBar.defaultProps = {
  currentDay: false,
};

export default ExpensesBar;
