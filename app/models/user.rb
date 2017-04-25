class User < ApplicationRecord
  include Clearance::User
  include AASM

  has_one :user_role
  has_one :role, through: :user_role

  has_many :characters, dependent: :destroy
  has_many :notices
  has_many :user_applications, dependent: :destroy

  accepts_nested_attributes_for :user_role, allow_destroy: true

  scope :stateless, -> { where(current_state: nil) }

  enum current_state: {
    active:  1,
    inactive: 2,
    rejected: 3
  }

  aasm(:current_state, enum: true) do
    state :active, initial: true
    state :inactive
    state :rejected

    event :deactivate do
      transitions from: :active, to: :inactive
    end

    event :reject do
      transitions from: :active, to: :rejected
    end
  end

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
