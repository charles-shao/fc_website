class Role < ApplicationRecord

  has_many :user_roles

  def admin?
    name.eql? "Admin"
  end

  def static_lead?
    name.eql? "Static Lead"
  end

  def member?
    name.eql? "Member"
  end

  def guest?
    name.eql? "Guest"
  end

end
