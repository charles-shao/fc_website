class Character < ApplicationRecord

  belongs_to :user

  has_many :events, as: :sourceable
  has_many :character_jobs
  has_many :static_characters
  has_many :statics, through: :static_characters

end
