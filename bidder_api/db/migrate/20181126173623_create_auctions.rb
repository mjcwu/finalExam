class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :price
      t.datetime :created_at
      t.datetime :end_date

      t.timestamps
    end
  end
end
