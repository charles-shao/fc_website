class Notice < ApplicationRecord

  belongs_to :user

  scope :ordered_by_created_at, -> { order(:created_at) }
  scope :published, -> { where(publish: true) }

end
