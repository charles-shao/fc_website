class AddImageFileToRaidContent < ActiveRecord::Migration[5.0]
  def change
    add_column :raid_contents, :image_file, :string, after: :released_at
  end
end
