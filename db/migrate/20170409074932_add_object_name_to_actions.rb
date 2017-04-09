class AddObjectNameToActions < ActiveRecord::Migration[5.0]
  def change
    add_column :actions, :object_name, :string
  end
end
