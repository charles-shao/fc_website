class SimulationsController < ApplicationController

  def index
    load_jobs
  end

  private

    def load_jobs
      jobs = Job.includes(:actions).inject([]) do |jobs_memo, job|
        actions = job.actions.inject([]) do |actions_memo, action|
          actions_memo << action.json_attributes
        end

        jobs_memo.push << {
          id: job.id,
          name: job.name,
          actions: actions
        }
      end

      gon.jobs = jobs
    end

end
