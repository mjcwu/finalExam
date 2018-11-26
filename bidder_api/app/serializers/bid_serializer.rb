class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid, :created_at, :user

  belongs_to :user, key: :bidder
  belongs_to :auction

end
