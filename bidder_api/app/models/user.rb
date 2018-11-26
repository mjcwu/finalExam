class User < ApplicationRecord
  has_many :bid
  has_many :auction
  has_secure_password
end
