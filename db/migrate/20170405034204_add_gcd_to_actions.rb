class AddGcdToActions < ActiveRecord::Migration[5.0]
  def change
    add_column :actions, :gcd_locked, :boolean
  end
end
