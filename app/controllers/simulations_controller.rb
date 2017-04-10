class SimulationsController < ApplicationController

  def index
    load_jobs
    load_trait_images
  end

  private

    def load_jobs
      jobs = Job.includes(:actions).order(:name).inject([]) do |jobs_memo, job|
        actions = job.actions.inject([]) do |actions_memo, action|
          actions_memo << action.json_attributes
        end

        jobs_memo.push << {
          id: job.id,
          name: job.name,
          actions: actions,
          identifier: job.identifier
        }
      end

      gon.jobs = jobs
    end

    def load_trait_images
      gon.trait_images = {
        blm: {
          astral_fire: ActionController::Base.helpers.image_path("traits/astral_fire.png"),
          astral_fire_ii: ActionController::Base.helpers.image_path("traits/astral_fire_ii.png"),
          astral_fire_iii: ActionController::Base.helpers.image_path("traits/astral_fire_iii.png"),
          umbral_ice: ActionController::Base.helpers.image_path("traits/umbral_ice.png"),
          umbral_ice_ii: ActionController::Base.helpers.image_path("traits/umbral_ice_ii.png"),
          umbral_ice_iii: ActionController::Base.helpers.image_path("traits/umbral_ice_iii.png")
        }
      }
    end

end
