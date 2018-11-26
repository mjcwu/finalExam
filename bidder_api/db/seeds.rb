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

q = Auction.create(
    title: "Vancouver City Hall",
    description: "Vancouver city hall is on sale now!",
    price: rand(1000),
    end_date: "2018-12-31",
    user: super_user
  )

  puts ("Generated")