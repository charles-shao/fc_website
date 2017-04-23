class User < ApplicationRecord
  include Clearance::User

  has_one :user_role
  has_one :role, through: :user_role

  has_many :characters, dependent: :destroy
  has_many :notices
  has_many :user_applications, dependent: :destroy

  accepts_nested_attributes_for :user_role, allow_destroy: true

  def friendly_name
    name || email
  end

  def has_pending_application?
    user_applications.pending_applications.any?
  end

  def has_approved_application?
    user_applications.approved_applications.any?
  end

end
