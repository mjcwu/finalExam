import React from "react";
import { User } from "../requests"

const BidForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      bid: formData.get("bids"),
      // user: User.current()
    });

    currentTarget.reset();
  };

  return (
    <form className="BidForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bids">Bid</label> <br />
        <input name="bids" id="bids" cols="60" rows="4" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default BidForm;
