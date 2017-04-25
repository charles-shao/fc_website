class UserApplication < ApplicationRecord
  include AASM

  belongs_to :user

  has_many :user_application_answers, dependent: :destroy

  accepts_nested_attributes_for :user_application_answers, allow_destroy: true

  scope :pending_applications, -> { where(current_state: :pending) }
  scope :approved_applications, -> { where(current_state: :approved) }
  scope :rejected_applications, -> { where(current_state: :rejected) }
  scope :stateless_applications, -> { where(current_state: nil) }

  alias answers user_application_answers

  enum current_state: {
    pending:  1,
    approved: 10,
    rejected: 20
  }

  aasm(:current_state, enum: true) do
    state :pending, initial: true
    state :approved
    state :rejected

    event :approve do
      transitions from: :pending, to: :approved
    end

    event :reject do
      transitions from: :pending, to: :rejected
    end
  end

end
