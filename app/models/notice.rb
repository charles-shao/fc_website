class Notice < ApplicationRecord

  belongs_to :user

  scope :most_recent, -> { order(created_at: :desc) }
  scope :published, -> { where(publish: true) }

end
