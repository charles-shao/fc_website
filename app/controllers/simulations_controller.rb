class SimulationsController < ApplicationController

  def index
    load_jobs
  end

  private

    def load_jobs
      jobs = Job.all.inject([]) do |memo, job|
        memo.push << {
          id: job.id,
          name: job.name
        }
      end

      gon.jobs = jobs
    end

end
