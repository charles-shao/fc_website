class Action < ApplicationRecord

  has_many :job_actions

  def json_attributes
    {
      id: id,
      name: name,
      potency: potency,
      cost: cost,
      resource: resource,
      cast_time: cast_time,
      animation_lock: animation_lock,
      duration: duration,
      cooldown: cooldown,
      category: category,
      modifier: modifier,
      gcd_locked: gcd_locked,
      image_path: ActionController::Base.helpers.image_path("actions/#{image_name}")
    }
  end

end
