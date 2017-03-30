class CharactersController < ApplicationController

  def new
  end

  def create
    character = current_user.characters.build(character_params)

    if character.save
      flash[:success] = "Successfully added character to your profile."
    else
      flash[:danger] = character.errors.full_messages.to_sentence
    end

    redirect_to profiles_path
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

    def character_params
      params.require(:character).permit(:name)
    end

end
