class User < ApplicationRecord
  include Clearance::User

  has_one :user_role
  has_one :role, through: :user_role

  has_many :characters, dependent: :destroy
  has_many :notices
  has_many :static_members
  has_many :statics, through: :static_members
  has_many :user_applications, dependent: :destroy

  accepts_nested_attributes_for :user_role, allow_destroy: true

  def friendly_name
    name || email
  end

end
