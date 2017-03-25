class CreateUserApplications < ActiveRecord::Migration[5.0]
  def change
    create_table :user_applications do |t|
      t.integer :user_id
      t.string :game

      t.timestamps
    end
  end
end
