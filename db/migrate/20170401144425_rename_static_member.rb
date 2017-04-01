class RenameStaticMember < ActiveRecord::Migration[5.0]
  def change
    rename_table :static_characters, :static_characters
  end
end
