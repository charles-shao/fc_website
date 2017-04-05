class RenameImagePathInActions < ActiveRecord::Migration[5.0]
  def change
    rename_column :actions, :image_path, :image_name
  end
end
