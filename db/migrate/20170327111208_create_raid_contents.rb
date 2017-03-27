class CreateRaidContents < ActiveRecord::Migration[5.0]
  def change
    create_table :raid_contents do |t|
      t.string :name
      t.string :patch
      t.datetime :released_at

      t.timestamps
    end
  end
end
