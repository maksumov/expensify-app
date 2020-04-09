import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import PortfoliosHomePage from "../components/PortfoliosHomePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/portfolio" component={PortfoliosHomePage} exact />
        <Route path="/portfolio/:id" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
