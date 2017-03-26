class Role < ApplicationRecord

  has_many :user_roles

  def admin?
    name.eql? "Admin"
  end

end
