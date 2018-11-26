class User < ApplicationRecord
  has_many :bid, dependent: :nullify
  has_many :auction, dependent: :nullify
  has_secure_password
end
