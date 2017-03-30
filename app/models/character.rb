class Character < ApplicationRecord

  belongs_to :user

  has_many :events, as: :sourceable

end
