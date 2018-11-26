class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, except: [ :index, :show ]

  def index
    auctions = Auction.order created_at: :desc
    render json: auctions
  end

  def show
    render json: auction
  end

  def destroy
    auction.destroy
    render json: { status: :success }
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user
    
    if auction.save
      render json: auction
    else
      render json: { errors: auction.errors.full_messages }
    end
  end

  private

  def auction
    Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :description, :price, :end_date)
  end
end
