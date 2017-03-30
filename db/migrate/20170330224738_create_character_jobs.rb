class CreateCharacterJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :character_jobs do |t|
      t.integer :character_id
      t.integer :job_id
      t.integer :level
      t.integer :item_level

      t.timestamps
    end
  end
end
