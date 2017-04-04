class Job < ApplicationRecord

  has_many :character_jobs
  has_many :job_actions, dependent: :destroy
  has_many :actions, through: :job_actions
  
end
