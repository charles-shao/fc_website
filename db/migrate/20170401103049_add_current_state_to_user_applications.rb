class AddCurrentStateToUserApplications < ActiveRecord::Migration[5.0]
  def change
    add_column :user_applications, :current_state, :integer, after: :game
  end
end
