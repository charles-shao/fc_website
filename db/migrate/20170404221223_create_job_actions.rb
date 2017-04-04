class CreateJobActions < ActiveRecord::Migration[5.0]
  def change
    create_table :job_actions do |t|
      t.integer :job_id
      t.integer :action_id

      t.timestamps
    end
  end
end
