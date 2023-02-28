import ExpensesBar from "./ExpensesBar";

function ExpensesChart({ data, caption }) {
  //get current day
  let date = new Date();
  let currentDay = date
    .toLocaleString("en-US", { weekday: "short" })
    .toLowerCase();

  // get the maximum amount to set the height accordingly
  let maxAmount = -Infinity;
  for (let item of data) if (item.amount > maxAmount) maxAmount = item.amount;

  return (
    <table className="expenses-chart">
      <caption>{caption}</caption>
      <tbody>
        {data.map((day, index) => {
          //set the height to percentage of the max amount
          let height = Math.floor((day.amount * 100) / maxAmount);
          return (
            <ExpensesBar
              amount={day.amount}
              text={day.day}
              key={index}
              height={height}
              isCurrentDay={day.day === currentDay ? true : false}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ExpensesChart;
