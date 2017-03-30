class Character < ApplicationRecord

  belongs_to :user

  has_many :events, as: :sourceable
  has_many :character_jobs

end
