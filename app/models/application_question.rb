class ApplicationQuestion < ApplicationRecord

  has_many :user_application_answers, dependent: :destroy

  scope :active, -> { where(active: true) }
  scope :ordered_by_rank, -> { order(:rank, :id) }

end
