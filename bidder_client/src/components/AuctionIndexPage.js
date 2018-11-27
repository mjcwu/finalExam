import React, { Component } from "react";
import {Link} from "react-router-dom";

import { Auction } from "../requests";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      auctions: []
    };
    // this.deleteAuction = this.deleteAuction.bind(this);
  }

  deleteAuction(auctionId) {
    Auction.delete(auctionId).then(auction => {
      if (!auction.errors) {
        this.props.history.push(`/auction`);
      }
    });
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="AuctionIndexPage">
          <h1>Auction Index</h1>
          <h2>Loading...</h2>
        </main>
      );
    }
    return (
      <main className="AuctionIndexPage">
        <h1>Auction Index Page</h1>
        
        <ul
          style={{
            listStyle: "none",
            paddingLeft: "0"
          }}
        >
          {this.state.auctions.map(auction => (
            <li
              key={auction.id}
              style={{
                marginBottom: "10px"
              }}
            >
              <small>
                <em>{auction.id}</em>
              </small>{" "}
              <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
              <br />
              <button onClick={() => this.deleteAuction(auction.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionIndexPage;
