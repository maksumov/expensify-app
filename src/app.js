import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my ExpenseDashboardPage</div>
);
const AddExpensePage = () => <div>This is from my AddExpensePage</div>;
const EditExpensePage = () => <div>This is from my EditExpensePage</div>;
const HelpPage = () => <div>This is from my HelpPage</div>;
const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink exact to="/" activeClassName="is-active">
        Go home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>{" "}
      |{" "}
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>{" "}
      |{" "}
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
