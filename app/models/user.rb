class User < ApplicationRecord
  include Clearance::User

  has_many :user_applications, dependent: :destroy

end
