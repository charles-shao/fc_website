class Event < ApplicationRecord

  belongs_to :character, polymorphic: true
  belongs_to :notice, polymorphic: true
  belongs_to :user

  scope :most_recent, -> { order(created_at: :desc ) }

  def created?
    "create".eql? action
  end

end
