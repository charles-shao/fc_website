class RaidContent < ApplicationRecord

  has_many :static_progressions, dependent: :destroy

  def image_path
    image_file.present? ? image_file : "default-avatar.png"
  end

end
