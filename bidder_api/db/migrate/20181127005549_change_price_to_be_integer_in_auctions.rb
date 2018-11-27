class ChangePriceToBeIntegerInAuctions < ActiveRecord::Migration[5.2]
  def change
    change_column :auctions, :price, :integer
  end
end
