class User < ApplicationRecord
  include Clearance::User

  has_one :user_role
  has_one :role, through: :user_role

  has_many :user_applications, dependent: :destroy
  has_many :notices

  accepts_nested_attributes_for :user_role, allow_destroy: true


  def admin?
    role.present? && role.admin?
  end

end
