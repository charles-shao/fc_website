class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :sourceable_id
      t.string  :sourceable_type
      t.string  :action

      t.timestamps
    end
  end
end
