class AuctionController < ApplicationController

  before_action :find_question, only: [:show, :destroy]

  def create
    @auction = Auction.new auction_params
    # @auction.user = current_user

    if @auction.save
      redirect_to auction_path(@auction)
    else
      render :new
    end
  end

  def index
    @auctions = Auction.all.order(created_at: :desc)
    
    respond_to do |format|
      format.html { render } # this will render `views/auction/index.html.erb`
      format.json { render json: @auction }
      format.text { render plain: 'Hello World!' }
    end
  end

  def show
    @bid = @auction.bids.order(created_at: :desc)
    @bid = Bid.new
    
  end

  def destroy
    @auction.destroy

    redirect_to auction_path
  end

  private
  def auction_params
    params.require(:auction).permit(:title, :description, :price, :end_date)
  end

  def find_auction
    @auction = Auctioin.find params[:id]
  end
end
