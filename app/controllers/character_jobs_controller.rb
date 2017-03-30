class CharacterJobsController < ApplicationController

  def create
    @character = current_user.characters.find_by(id: params[:character_id])
    job = @character.character_jobs.build(character_job_params)

    if job.save
      flash[:success] = "Successfully added job to your character."
    else
      flash[:danger] = job.errors.full_messages.to_sentence
    end

    redirect_to edit_character_path(@character)
  end

  private

    def character_job_params
      params.require(:character_job).permit(:job_id, :level, :item_level)
    end

end
