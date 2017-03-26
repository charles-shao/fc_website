class CreateNotices < ActiveRecord::Migration[5.0]
  def change
    create_table :notices do |t|
      t.integer :user_id
      t.string :title
      t.string :content
      t.boolean :publish

      t.timestamps
    end
  end
end
