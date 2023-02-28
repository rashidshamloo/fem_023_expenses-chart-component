import { useState } from "react";

function ExpensesBar({ amount, text, height, isCurrentDay }) {
  // use display state to show/hide the amount
  const [opacity, setOpacity] = useState(0);

  // color of the current day
  const cyan = "hsl(186, 34%, 60%)";
  const LightCyan = "hsl(186, 34%, 70%)";

  // shows the amount
  function showAmount() {
    setOpacity(1);
  }

  //hides the amount
  function hideAmount() {
    setOpacity(0);
  }

  return (
    <tr className="expenses-bar">
      <td className="bar-holder">
        <div
          // on mouseEnter show the amount
          onMouseEnter={showAmount}
          // on mouseLeave hide the amount
          onMouseLeave={hideAmount}
          className="bar"
          // set height and
          // if currentDay property is true, set the background color to
          // Lightcyan if mouseOver is true (thus opacity is 1) else cyan
          style={{
            height: height + "%",
            backgroundColor: isCurrentDay && (opacity ? LightCyan : cyan),
          }}
        >
          <div className="amount" style={{ opacity: opacity }}>
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
