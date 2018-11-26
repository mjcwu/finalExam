# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.delete_all
Auction.delete_all
User.delete_all


PASSWORD = "supersecret"

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD
)

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  u = User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

a = Auction.create(
    title: "Vancouver City Hall",
    description: "Vancouver city hall is on sale now!",
    price: 1000,
    end_date: "2018-12-31",
    user: super_user
  )

  if a.valid?
    rand(0..15).times do
      a.bids << Bid.new(
        bid: rand(300),
        user: users.sample
      )
    end
  end

  puts ("Generated")