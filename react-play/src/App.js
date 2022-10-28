import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Book Keeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
