class AddCurrentStateToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :current_state, :string
  end
end
