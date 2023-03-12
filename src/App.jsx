import "./styles/App.scss";
import data from "./data/data.json";
import ExpensesChart from "./components/ExpensesChart";

function App() {
  return (
    <>
      <header>
        <div className="balance">
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <img src="images/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <main>
        <ExpensesChart data={data} caption="Spending - Last 7 days" />
        <hr />
        <div className="summary">
          <div className="total-spending">
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div className="last-month">
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </main>
      <footer>
        <p>Developed by Rashid Shamloo</p>
        <ul className="footer-icon">
          <li>
            <a
              href="https://github.com/rashidshamloo"
              title="GitHub"
              target="_blank"
            >
              <i className="bi-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rashid-shamloo/"
              title="Linked-in"
              target="_blank"
            >
              <i className="bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rashidshamloo"
              title="Twitter"
              target="_blank"
            >
              <i className="bi-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
