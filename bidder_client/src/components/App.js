import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import AuctionIndexPage from "./AuctionIndexPage";
// import AuctionNewPage from "./AuctionNewPage";
import AuctionShowPage from "./AuctionShowPage";
import WelcomePage from "./Welcome";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        {/* <Route path="/auctions/new" exact component={AuctionNewPage} /> */}
        <Route
          path="/auctions/:id"
          exact={true}
          component={AuctionShowPage}
        />
        <Route path="/auctions" exact component={AuctionIndexPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;