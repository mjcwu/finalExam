class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :end_date, :created_at

  belongs_to :user, key: :seller
  has_many :bids

  def created_at
    object.created_at.strftime('%Y-%B-%d')
  end
end
