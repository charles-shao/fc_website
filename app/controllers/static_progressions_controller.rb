class StaticProgressionsController < ApplicationController

  def index
    @static = Static.find_by(id: params[:static_id])
    @static_progressions = [] #@static.static_progressions
  end

  def create
  end

  def destroy
  end

end
