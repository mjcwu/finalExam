import React, { Component } from "react";
import AuctionForm from "./AuctionForm";
import { Auction } from "../requests";

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createAuction = this.createAuction.bind(this);
  }

  createAuction(params) {
    Auction.create(params).then(auction => {
      if (!auction.errors) {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  }

  render() {
    return (
      <main className="AuctionNewPage">
        <h1>New Auction</h1>
        <AuctionForm onSubmit={this.createAuction} />
      </main>
    );
  }
}

export default AuctionNewPage;
