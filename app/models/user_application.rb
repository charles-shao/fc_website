class UserApplication < ApplicationRecord
  include AASM

  belongs_to :user

  has_many :user_application_answers, dependent: :destroy

  accepts_nested_attributes_for :user_application_answers, allow_destroy: true

  scope :pending_applications, -> { where(current_state: :pending) }

  enum current_state: {
    pending:  1,
    approved: 10
  }

  aasm(:current_state, enum: true) do
    state :pending, initial: true
    state :approved

    event :approve do
      transitions from: :pending, to: :approved
    end
  end

end
