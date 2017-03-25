class UserApplication < ApplicationRecord

  belongs_to :user

  has_many :user_application_answers, dependent: :destroy

  accepts_nested_attributes_for :user_application_answers, allow_destroy: true

end
