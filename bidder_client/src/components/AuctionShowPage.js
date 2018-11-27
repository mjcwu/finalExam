import React, { Component } from "react";
import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import BidForm from "./BidForm";
import { Auction } from "../requests"

class AuctionShowPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      auction: null
    };
    this.deleteAuction = this.deleteAuction.bind(this);
    this.createBid = this.createBid.bind(this);
  }

  deleteAuction() {
    this.setState({
      auction: null
    });
  }

  createBid(params) {
    Auction.update(params).then(auction => {
      if (!auction.errors) {
        this.props.history.push(`/auctions/${auction.auction.id}`);
      }
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      this.setState({
        auction: auction,
        loading: false
      });
    });
  }
  
  render() {
    if (this.state.loading) {
      return (
        <main className="AuctionShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!this.state.auction) {
      return (
        <main className="AuctionShowPage">
          <h1>Auction doesn't exist!</h1>
        </main>
      );
    }

    return (
      <main className="AuctionShowPage">
        <AuctionDetails
          {...this.state.auction}
        />
        {/* <button onClick={this.deleteAuction}>Delete</button> */}

        <BidForm
          onSubmit={this.createBid}
        />

        <h2
          style={{
            fontWeight: "300",
            color: "darkgreen"
          }}
        >
          Previous Bids
        </h2>
        <BidList
          bids={this.state.auction.bids}
        />
      </main>
    );
  }
}

export default AuctionShowPage;