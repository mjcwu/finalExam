class Auction < ApplicationRecord
  belongs_to :user
  has_many :bid
end