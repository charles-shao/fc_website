class RaidContent < ApplicationRecord

  has_many :static_progressions, dependent: :destroy

end
