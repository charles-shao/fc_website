class RenameStaticMember < ActiveRecord::Migration[5.0]
  def change
    rename_table :static_members, :static_characters
  end
end
