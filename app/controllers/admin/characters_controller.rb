class Admin::CharactersController < AdminController

  def edit
    @character = Character.find_by(id: params[:id])
  end

  def update
    @character = Character.find_by(id: params[:id])

    if @character.update_attributes(character_params)
      flash[:success] = "Successfully updated character."
      redirect_to characters_path
    else
      flash.now[:danger] = @character.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

    def character_params
      params.require(:character).permit(:name)
    end

end
