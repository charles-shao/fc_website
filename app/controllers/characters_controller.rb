class CharactersController < ApplicationController

  def new
    @character = current_user.characters.build
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
    @character = current_user.characters.find_by(id: params[:id])
  end

  def update
    @character = current_user.characters.find_by(id: params[:id])

    if @character.update_attributes(character_params)
      flash[:success] = "Successfully updated character."
      redirect_to profiles_path
    else
      flash.now[:danger] = @character.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @character = current_user.characters.find_by(id: params[:id])

    if @character.destroy
      flash[:success] = "Successfully deleted #{@character.name}."
    else
      flash[:danger] = @character.errors.full_messages.to_sentence
    end

    redirect_to profiles_path
  end

  private

    def character_params
      params.require(:character).permit(:name)
    end

end
