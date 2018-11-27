import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import AuctionIndexPage from "./AuctionIndexPage";
// import AuctionNewPage from "./AuctionNewPage";
import AuctionShowPage from "./AuctionShowPage";
import WelcomePage from "./Welcome";

import SignInPage from "./SignInPage";
// import AuthRoute from "./AuthRoute";
import { User, Session } from "../requests";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        this.setState({ currentUser });
      }

      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { currentUser } = this.state;

    if (this.state.loading) {
      return (
        <div className="App">
          <main>
            <h1>Loading...</h1>
          </main>
        </div>
      );
    }

    return(
      <BrowserRouter>
        <div className="App">
          <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route
              path="/session/new"
              exact
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
            {/* <AuthRoute
              isAuth={currentUser}
              path="/questions/new"
              exact
              component={QuestionNewPage}
            /> */}
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
  }
}

export default App;