class AddRoleToCharacter < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :role, :string
  end
end
