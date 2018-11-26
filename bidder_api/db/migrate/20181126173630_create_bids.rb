class CreateBids < ActiveRecord::Migration[5.2]
  def change
    create_table :bids do |t|
      t.float :bid
      t.datetime :created_at
      t.timestamps
    end
  end
end
