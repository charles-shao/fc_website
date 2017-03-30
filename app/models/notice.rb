# frozen_string_literal: true
class Notice < ApplicationRecord

  belongs_to :user

  has_many :events, as: :sourceable

  scope :most_recent, -> { order(created_at: :desc) }
  scope :published, -> { where(publish: true) }

end
