class Static < ApplicationRecord

  has_many :static_members, dependent: :destroy
  has_many :members, through: :static_members, source: :user
  has_many :static_progressions, dependent: :destroy
  has_many :raid_contents, through: :static_progressions

end
