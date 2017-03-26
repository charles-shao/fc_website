class User < ApplicationRecord
  include Clearance::User

  has_many :user_applications, dependent: :destroy
  has_many :notices

end
