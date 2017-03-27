class CreateStaticProgression < ActiveRecord::Migration[5.0]
  def change
    create_table :static_progressions do |t|
      t.integer :static_id
      t.integer :raid_content_id
      t.datetime :cleared_at

      t.timestamps
    end
  end
end
