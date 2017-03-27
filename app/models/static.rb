class Static < ApplicationRecord

  has_many :static_members
  has_many :members, through: :static_members, source: :user
  has_many :static_progressions 

end
