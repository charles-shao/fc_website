class UserApplicationAnswer < ApplicationRecord

  belongs_to :user_application
  belongs_to :application_question

end
