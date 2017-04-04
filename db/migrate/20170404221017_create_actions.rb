class CreateActions < ActiveRecord::Migration[5.0]
  def change
    create_table :actions do |t|
      t.string :name
      t.integer :potency
      t.integer :cost
      t.string :resource
      t.decimal :cast_time
      t.decimal :animation_lock
      t.integer :duration
      t.integer :cooldown
      t.string :category
      t.decimal :modifier
      t.string :image_path

      t.timestamps
    end
  end
end
