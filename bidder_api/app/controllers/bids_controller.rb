class BidsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  before_action :find_bid, only: [:destroy]
  before_action :authorize_user!, only: [:create]

  def create
    @auction = Auction.find params[:auction_id]
    @bid = Bid.new bid_params
    @bid.auction = @auction
    # @bid.user = current_user

    if @bid.save
      redirect_to auction_path(@auction)
    else
      @bids = @auction.bids.order(created_at: :desc)
      render "auctions/show"
    end
  end

  private
  def bid_params
    params.require(:bid).permit(:price)
  end

  def find_bid
    @bid = Bid.find params[:id]
  end
  
  def authorize_user!
    unless can? :crud, @bid
      flash[:danger] = "Access Denied"
      redirect_to home_path
    end
  end
end
