class AddIdentifierToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :identifier, :string
  end
end
