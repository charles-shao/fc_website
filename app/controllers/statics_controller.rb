class StaticsController < ApplicationController

  def index
    @statics = Static.all
  end

  def new
    @static = Static.new
  end

  def create
    @static = Static.new(static_params)

    if @static.save
      flash[:success] = "Successfully created static."
      redirect_to statics_path
    else
      flash[:danger] = @static.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @static = Static.find_by(id: params[:id])
  end

  def update
    @static = Static.find_by(id: params[:id])

    if @static.update_attributes(static_params)
      flash[:success] = "Successfully updated static."
      redirect_to statics_path
    else
      flash[:danger] = @static.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
  end

  private

    def static_params
      params.require(:static).permit(:name)
    end
end
