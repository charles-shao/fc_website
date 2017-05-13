class UnassignedCharactersController < ApplicationController

  def new
  end

  def create
    character = Character.new(character_params)

    if character.save
      flash[:success] = "Successfully added character to the list."
    else
      flash[:danger] = character.errors.full_messages.to_sentence
    end

    redirect_to characters_path
  end

  private

    def character_params
      params.require(:character).permit(:name)
    end

end
