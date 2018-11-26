import React from "react";

const BidDetails = props => (
  <div className="BidDetails">
    <p>{props.bid}</p>
    <p>Created at: {props.created_at}</p>
  </div>
);

export default BidDetails;
