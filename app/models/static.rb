class Static < ApplicationRecord

  has_many :static_characters, dependent: :destroy
  has_many :characters, through: :static_characters
  has_many :static_progressions, dependent: :destroy
  has_many :raid_contents, through: :static_progressions

end
