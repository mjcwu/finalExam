
import React from "react";

const AuctionDetails = props => (
  <div className="AuctionDetails">
    <h2 style={{
      color:"maroon",
      fontweight: 300
  }}>{props.title}</h2>
    <p>{props.description}</p>
    <h5>Starting Bid ${props.price}</h5>
    <p>
      <small>Seller:  {props.seller.first_name}            {props.seller.last_name} </small>
      •
      <small>Created: {props.created_at} days ago</small>
      •
      
    </p>
  </div>
)

export default AuctionDetails;
