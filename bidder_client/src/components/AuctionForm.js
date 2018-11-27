import React from "react";

const AuctionForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      description: formData.get("description"),
      price: formData.get("price"),
      end_date: formData.get("end_date"),

    });

    currentTarget.reset();
  };

  return (
    <form className="AuctionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
      </div>
      <div>
        <label htmlFor="description">Description</label> <br />
        <textarea name="description" id="description" cols="60" rows="4" />
      </div>
      <div>
        <label htmlFor="price">Price</label> <br />
        <input name="price" id="price" cols="60" rows="4" />
      </div>
      <div>
        <label htmlFor="end_date">Bidding End Date</label> <br />
        <input name="end_date" id="end_date" cols="60" rows="4" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AuctionForm;
