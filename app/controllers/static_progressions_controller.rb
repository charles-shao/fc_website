class StaticProgressionsController < ApplicationController

  def index
    @static = Static.find_by(id: params[:static_id])
    @static_progressions = @static.static_progressions
  end

  def create
    @static = Static.find_by(id: params[:static_id])
    static_progression = @static.static_progressions.build(static_progression_params)

    if static_progression.save
      flash[:success] = "Successfully added #{static_progression.raid_content.name} clear."
    else
      flash[:danger] = static_progression.errors.full_messages.to_sentence
    end

    @static_progressions = @static.static_progressions
    redirect_to static_static_progressions_path(@static)
  end

  def edit
    @static = Static.find_by(id: params[:static_id])
    @progression = @static.static_progressions.find_by(id: params[:id])
  end

  def update
    @static = Static.find_by(id: params[:static_id])
    @progression = @static.static_progressions.find_by(id: params[:id])

    if @progression.update_attributes(static_progression_params)
      flash[:success] = "Successfully updated progression details."
      redirect_to static_static_progressions_path(@static)
    else
      flash.now[:danger] = @progression.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @static = Static.find_by(id: params[:static_id])
    @static_progression = @static.static_progressions.find_by(id: params[:id])

    if @static_progression.destroy
      flash[:success] = "Successfully removed raid clear."
    else
      flash[:danger] = @static_progression.errors.full_messages.to_sentence
    end

    redirect_to static_static_progressions_path(@static)
  end

  private

    def static_progression_params
      params.require(:static_progression).permit(:raid_content_id, :cleared_at)
    end

end
