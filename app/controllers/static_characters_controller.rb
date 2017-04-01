class StaticCharactersController < ApplicationController

  before_action :load_static_characters

  def index
    @static_characters = @static.static_characters.includes(:character)
  end

  def create
    static_character = @static.static_characters.build(static_character_params)

    if static_character.save
      flash[:success] = "Successfully filled position."
    else
      flash[:danger] = static_user.errors.full_messages.to_sentence
    end

    @static_characters = @static.static_characters
    redirect_to static_static_characters_path(@static)
  end

  def destroy
    @static_characters = @static.static_characters.find_by(id: params[:id])

    if @static_characters.destroy
      flash[:success] = "Successfully removed static member."
    else
      flash[:danger] = @static_characters.errors.full_messages.to_sentence
    end

    redirect_to static_static_characters_path(@static)
  end

  private

    def static_character_params
      params.require(:static_character).permit(:character_id, :position)
    end

    def load_static_characters
      @static = Static.find_by(id: params[:static_id])
      @available_characters = Character.where.not(id: @static.characters.pluck(:id))
    end

end
