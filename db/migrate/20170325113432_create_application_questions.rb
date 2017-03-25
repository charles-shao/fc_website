class CreateApplicationQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :application_questions do |t|
      t.string :content
      t.integer :rank
      t.boolean :required
      t.boolean :active

      t.timestamps
    end
  end
end
