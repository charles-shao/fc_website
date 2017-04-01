class RenameUserIdOnStaticMember < ActiveRecord::Migration[5.0]
  def change
    rename_column :static_members, :user_id, :character_id
  end
end
