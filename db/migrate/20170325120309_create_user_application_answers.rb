class CreateUserApplicationAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :user_application_answers do |t|
      t.integer :user_application_id
      t.integer :application_question_id
      t.string :content

      t.timestamps
    end
  end
end
