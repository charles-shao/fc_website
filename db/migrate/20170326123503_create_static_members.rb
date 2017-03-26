class CreateStaticMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :static_members do |t|
      t.integer :static_id
      t.integer :user_id
      t.string :position

      t.timestamps
    end
  end
end
