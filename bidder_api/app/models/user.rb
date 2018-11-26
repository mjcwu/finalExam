class User < ApplicationRecord
  has_many :bid
  has_many :auction
end
